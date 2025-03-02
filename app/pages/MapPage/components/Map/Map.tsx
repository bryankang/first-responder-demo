import { Flex } from "@radix-ui/themes";
import { FC, useEffect } from "react";
import styles from "./Map.module.css";
import { Logo } from "~/components/Logo";
import mapboxgl from "mapbox-gl";

export type MapProps = {};

export const Map: FC<MapProps> = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmsyMDMzNDYiLCJhIjoiY203cXhzNXFwMTFuaDJtcHVmMnQ4cjZuNyJ9.LL0YqOtu0e5uT1vt2kltgQ";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/bk203346/cm7rrpapl01l301qvbe4t93nq", // style URL
      center: [-73.996577, 40.73647], // starting position [lng, lat]
      zoom: 18, // starting zoom
    });

    const markerContainerEl = document.createElement("div");
    markerContainerEl.className = styles.markerContainer;
    const pulseEl = document.createElement("div");
    pulseEl.className = styles.pulse;
    const markerEl = document.createElement("div");
    markerEl.className = styles.marker;

    markerContainerEl.appendChild(pulseEl);
    markerContainerEl.appendChild(markerEl);

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.997477, 40.736481],
          },
          properties: {
            title: "Mapbox",
            description: "Washington, D.C.",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.996577, 40.73647],
          },
          properties: {
            title: "Mapbox",
            description: "San Francisco, California",
          },
        },
      ],
    };

    for (const feature of geojson.features) {
      new mapboxgl.Marker(markerContainerEl)
        .setLngLat(feature.geometry.coordinates as any)
        .addTo(map); // Replace this line with code from step 7-2
    }
  }, []);
  return <div id="map" className={styles.root} />;
};
