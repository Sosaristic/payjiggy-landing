'use client';
import React, { useEffect, useRef, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { envConfigs } from '@/constants/env-configs';
import mapboxgl from 'mapbox-gl';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = envConfigs.MAPBOX_ACCESS_TOKEN;
    //@ts-ignore
    mapRef.current = new mapboxgl.Map({
      //@ts-ignore
      container: mapContainerRef.current,
      center: [7.0669651, 5.5859456],

      zoom: 10,

      style: 'mapbox://styles/mapbox/streets-v12',
      //   minZoom: 15,
      maxZoom: 20,
    });
  }, []);

  return (
    <div className="relative h-[30rem]">
      <div id="map" style={{ height: '100%' }} ref={mapContainerRef} />
    </div>
  );
}
