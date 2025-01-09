/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCallback, useRef, useState } from "react";
import "lightgallery/css/lightgallery.css";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// start Vinyl And Laminate
import VinylAndLaminate1 from "../assets/vinyl-and-laminates/vinyl-and-laminate-1.jpg";
import VinylAndLaminate2 from "../assets/vinyl-and-laminates/vinyl-and-laminate-2.jpg";
import VinylAndLaminate3 from "../assets/vinyl-and-laminates/vinyl-and-laminate-3.jpg";
import VinylAndLaminate4 from "../assets/vinyl-and-laminates/vinyl-and-laminate-4.jpg";
import VinylAndLaminate5 from "../assets/vinyl-and-laminates/vinyl-and-laminate-5.jpg";
import VinylAndLaminate6 from "../assets/vinyl-and-laminates/vinyl-and-laminate-6.jpg";
import VinylAndLaminate7 from "../assets/vinyl-and-laminates/vinyl-and-laminate-7.jpg";
import VinylAndLaminate8 from "../assets/vinyl-and-laminates/vinyl-and-laminate-8.jpg";
import VinylAndLaminate9 from "../assets/vinyl-and-laminates/vinyl-and-laminate-9.jpg";
import VinylAndLaminate10 from "../assets/vinyl-and-laminates/vinyl-and-laminate-10.jpg";
import VinylAndLaminate11 from "../assets/vinyl-and-laminates/vinyl-and-laminate-11.jpg";
import VinylAndLaminate12 from "../assets/vinyl-and-laminates/vinyl-and-laminate-12.jpg";
import VinylAndLaminate13 from "../assets/vinyl-and-laminates/vinyl-and-laminate-13.jpg";
import VinylAndLaminate14 from "../assets/vinyl-and-laminates/vinyl-and-laminate-14.jpg";
import VinylAndLaminate15 from "../assets/vinyl-and-laminates/vinyl-and-laminate-15.jpg";
import VinylAndLaminate16 from "../assets/vinyl-and-laminates/vinyl-and-laminate-16.jpg";
import VinylAndLaminate17 from "../assets/vinyl-and-laminates/vinyl-and-laminate-17.jpg";
import VinylAndLaminate18 from "../assets/vinyl-and-laminates/vinyl-and-laminate-18.jpg";
import VinylAndLaminate19 from "../assets/vinyl-and-laminates/vinyl-and-laminate-19.jpg";
import VinylAndLaminate20 from "../assets/vinyl-and-laminates/vinyl-and-laminate-20.jpg";
import VinylAndLaminate21 from "../assets/vinyl-and-laminates/vinyl-and-laminate-21.jpg";
import VinylAndLaminate22 from "../assets/vinyl-and-laminates/vinyl-and-laminate-22.jpg";
// emd Vinyl And Laminate

// start vent
import Vent2 from "../assets/vents/vent-2.jpg";
import Vent3 from "../assets/vents/vent-3.jpg";
import Vent4 from "../assets/vents/vent-4.jpg";
import Vent5 from "../assets/vents/vent-5.jpg";
import Vent6 from "../assets/vents/vent-6.jpg";
// end vent

// start tile
import Tile1 from "../assets/tiles/tile-1.jpg";
import Tile2 from "../assets/tiles/tile-2.jpg";
import Tile3 from "../assets/tiles/tile-3.jpg";
import Tile4 from "../assets/tiles/tile-4.jpg";
import Tile5 from "../assets/tiles/tile-5.jpg";
import Tile6 from "../assets/tiles/tile-6.jpg";
// end tile

// start stair
import Stair1 from "../assets/stairs/stair-1.jpeg";
import Stair2 from "../assets/stairs/stair-2.jpg";
import Stair3 from "../assets/stairs/stair-3.jpg";
import Stair4 from "../assets/stairs/stair-4.jpg";
import Stair5 from "../assets/stairs/stair-5.jpg";
import Stair6 from "../assets/stairs/stair-6.jpg";
import Stair7 from "../assets/stairs/stair-7.jpg";
import Stair8 from "../assets/stairs/stair-8.jpg";
import Stair9 from "../assets/stairs/stair-9.jpg";
import Stair10 from "../assets/stairs/stair-10.jpg";
import Stair11 from "../assets/stairs/stair-11.jpg";
import Stair12 from "../assets/stairs/stair-12.jpg";
import Stair13 from "../assets/stairs/stair-13.jpg";
import Stair14 from "../assets/stairs/stair-14.jpg";
import Stair15 from "../assets/stairs/stair-15.jpg";
import Stair16 from "../assets/stairs/stair-16.jpg";
import Stair17 from "../assets/stairs/stair-17.jpg";
import Stair18 from "../assets/stairs/stair-18.jpg";
import Stair19 from "../assets/stairs/stair-19.jpg";
import Stair20 from "../assets/stairs/stair-20.jpg";
import Stair21 from "../assets/stairs/stair-21.jpg";
import Stair22 from "../assets/stairs/stair-22.jpg";
import Stair23 from "../assets/stairs/stair-23.jpg";
import Stair24 from "../assets/stairs/stair-24.jpg";
import Stair25 from "../assets/stairs/stair-25.jpg";
import Stair26 from "../assets/stairs/stair-26.jpg";
import Stair27 from "../assets/stairs/stair-27.jpg";
import Stair28 from "../assets/stairs/stair-28.jpg";
import Stair29 from "../assets/stairs/stair-29.jpg";
import Stair30 from "../assets/stairs/stair-30.jpg";
import Stair31 from "../assets/stairs/stair-31.jpg";
import Stair32 from "../assets/stairs/stair-32.jpg";
import Stair33 from "../assets/stairs/stair-33.jpg";
import Stair34 from "../assets/stairs/stair-34.jpg";
import Stair35 from "../assets/stairs/stair-35.jpg";
import Stair36 from "../assets/stairs/stair-36.jpg";
import Stair37 from "../assets/stairs/stair-37.jpg";
import Stair38 from "../assets/stairs/stair-38.jpg";
import Stair39 from "../assets/stairs/stair-39.jpg";
import Stair40 from "../assets/stairs/stair-40.jpg";
import Stair41 from "../assets/stairs/stair-41.jpg";
import Stair42 from "../assets/stairs/stair-42.jpg";
import Stair43 from "../assets/stairs/stair-43.jpg";
import Stair44 from "../assets/stairs/stair-44.jpg";
import Stair45 from "../assets/stairs/stair-45.jpg";
import Stair46 from "../assets/stairs/stair-46.jpg";
import Stair47 from "../assets/stairs/stair-47.jpg";
import Stair48 from "../assets/stairs/stair-48.jpg";
// end stair

// start sand-flooring
import SandFlooring1 from "../assets/sand-floorings/sand-flooring-1.jpg";
import SandFlooring2 from "../assets/sand-floorings/sand-flooring-2.jpg";
import SandFlooring3 from "../assets/sand-floorings/sand-flooring-3.jpg";
import SandFlooring4 from "../assets/sand-floorings/sand-flooring-4.jpg";
import SandFlooring5 from "../assets/sand-floorings/sand-flooring-5.jpg";
import SandFlooring6 from "../assets/sand-floorings/sand-flooring-6.jpg";
import SandFlooring7 from "../assets/sand-floorings/sand-flooring-7.jpg";
import SandFlooring8 from "../assets/sand-floorings/sand-flooring-8.jpg";
import SandFlooring9 from "../assets/sand-floorings/sand-flooring-9.jpg";
import SandFlooring10 from "../assets/sand-floorings/sand-flooring-10.jpg";
import SandFlooring11 from "../assets/sand-floorings/sand-flooring-11.jpg";
import SandFlooring12 from "../assets/sand-floorings/sand-flooring-12.jpg";
// end sand-flooring

// start flooring
import Flooring1 from "../assets/floorings/flooring-1.jpg";
import Flooring2 from "../assets/floorings/flooring-2.jpg";
import Flooring3 from "../assets/floorings/flooring-3.jpg";
import Flooring4 from "../assets/floorings/flooring-4.jpg";
import Flooring5 from "../assets/floorings/flooring-5.jpg";
import Flooring6 from "../assets/floorings/flooring-6.jpg";
import Flooring7 from "../assets/floorings/flooring-7.jpg";
import Flooring8 from "../assets/floorings/flooring-8.jpg";
import Flooring9 from "../assets/floorings/flooring-9.jpg";
import Flooring10 from "../assets/floorings/flooring-10.jpg";
import Flooring11 from "../assets/floorings/flooring-11.jpg";
import Flooring12 from "../assets/floorings/flooring-12.jpg";
import Flooring13 from "../assets/floorings/flooring-13.jpg";
import Flooring14 from "../assets/floorings/flooring-14.jpg";
import Flooring15 from "../assets/floorings/flooring-15.jpg";
import Flooring16 from "../assets/floorings/flooring-16.jpg";
import Flooring17 from "../assets/floorings/flooring-17.jpg";
import Flooring18 from "../assets/floorings/flooring-18.jpg";
import Flooring19 from "../assets/floorings/flooring-19.jpg";
import Flooring20 from "../assets/floorings/flooring-20.jpg";
import Flooring21 from "../assets/floorings/flooring-21.jpg";
import Flooring22 from "../assets/floorings/flooring-22.jpg";
import Flooring23 from "../assets/floorings/flooring-23.jpg";
import Flooring24 from "../assets/floorings/flooring-24.jpg";
// end flooring

const MyLightGallery = () => {
  const lightGalleryVinylAndLaminatesRef = useRef<any>(null);
  const lightGalleryVentsRef = useRef<any>(null);
  const lightGalleryTilesRef = useRef<any>(null);
  const lightGalleryStairsRef = useRef<any>(null);
  const lightGallerySandFlooringsRef = useRef<any>(null);
  const lightGalleryFlooringsRef = useRef<any>(null);

  const [vinylAndLaminates] = useState([
    {
      src: VinylAndLaminate1.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate2.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate3.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate4.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate5.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate6.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate7.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate8.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate9.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate10.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate11.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate12.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate13.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate14.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate15.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate16.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate17.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate18.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate19.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate20.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate21.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
    {
      src: VinylAndLaminate22.src,
      subHtml: "<h3>Laminate & Viny</h3>",
    },
  ]);

  const [vents] = useState([
    {
      src: Vent2.src,
      subHtml: "<h3>Vents</h3>",
    },
    {
      src: Vent3.src,
      subHtml: "<h3>Vents</h3>",
    },
    {
      src: Vent4.src,
      subHtml: "<h3>Vents</h3>",
    },
    {
      src: Vent5.src,
      subHtml: "<h3>Vents</h3>",
    },
    {
      src: Vent6.src,
      subHtml: "<h3>Vents</h3>",
    },
  ]);

  const [tiles] = useState([
    {
      src: Tile1.src,
      subHtml: "<h3>Tiles</h3>",
    },
    {
      src: Tile2.src,
      subHtml: "<h3>Tiles</h3>",
    },
    {
      src: Tile3.src,
      subHtml: "<h3>Tiles</h3>",
    },
    {
      src: Tile4.src,
      subHtml: "<h3>Tiles</h3>",
    },
    {
      src: Tile5.src,
      subHtml: "<h3>Tiles</h3>",
    },
    {
      src: Tile6.src,
      subHtml: "<h3>Tiles</h3>",
    },
  ]);

  const [stairs] = useState([
    {
      src: Stair1.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair2.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair3.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair4.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair5.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair6.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair7.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair8.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair9.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair10.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair11.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair12.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair13.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair14.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair15.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair16.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair17.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair18.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair19.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair20.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair21.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair22.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair23.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair24.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair25.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair26.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair27.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair28.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair29.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair30.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair31.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair32.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair33.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair34.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair35.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair36.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair37.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair38.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair39.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair40.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair41.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair42.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair43.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair44.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair45.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair46.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair47.src,
      subHtml: "<h3>Stairs</h3>",
    },
    {
      src: Stair48.src,
      subHtml: "<h3>Stairs</h3>",
    },
  ]);

  const [sandFloorings] = useState([
    {
      src: SandFlooring1.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring2.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring3.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring4.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring5.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring6.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring7.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring8.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring9.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring10.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring11.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring12.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
    {
      src: SandFlooring12.src,
      subHtml: "<h3>Sand Flooring</h3>",
    },
  ]);

  const [floorings] = useState([
    {
      src: Flooring1.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring2.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring3.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring4.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring5.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring6.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring7.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring8.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring9.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring10.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring11.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring12.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring13.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring14.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring15.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring16.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring17.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring18.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring19.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring20.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring21.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring22.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring23.src,
      subHtml: "<h3>Flooring</h3>",
    },
    {
      src: Flooring24.src,
      subHtml: "<h3>Flooring</h3>",
    },
  ]);

  // start openGallery
  const openGalleryVinylAndLaminates = useCallback(() => {
    lightGalleryVinylAndLaminatesRef.current.openGallery();
  }, []);

  const openGalleryVents = useCallback(() => {
    lightGalleryVentsRef.current.openGallery();
  }, []);

  const openGalleryTiles = useCallback(() => {
    lightGalleryTilesRef.current.openGallery();
  }, []);

  const openGalleryStairs = useCallback(() => {
    lightGalleryStairsRef.current.openGallery();
  }, []);

  const openGallerySandFloorings = useCallback(() => {
    lightGallerySandFlooringsRef.current.openGallery();
  }, []);

  const openGalleryFloorings = useCallback(() => {
    lightGalleryFlooringsRef.current.openGallery();
  }, []);
  // end openGallery

  // start onInit
  const onInitVinylAndLaminates = useCallback((detail: any) => {
    if (detail) {
      lightGalleryVinylAndLaminatesRef.current = detail.instance;
    }
  }, []);

  const onInitVents = useCallback((detail: any) => {
    if (detail) {
      lightGalleryVentsRef.current = detail.instance;
    }
  }, []);

  const onInitTiles = useCallback((detail: any) => {
    if (detail) {
      lightGalleryTilesRef.current = detail.instance;
    }
  }, []);

  const onInitStairs = useCallback((detail: any) => {
    if (detail) {
      lightGalleryStairsRef.current = detail.instance;
    }
  }, []);

  const onInitSandFloorings = useCallback((detail: any) => {
    if (detail) {
      lightGallerySandFlooringsRef.current = detail.instance;
    }
  }, []);

  const onInitFloorings = useCallback((detail: any) => {
    if (detail) {
      lightGalleryFlooringsRef.current = detail.instance;
    }
  }, []);
  // end onInit

  return (
    <section className="section installation-section">
      <div className="container">
        <h2 className="section-title">TYPES OF FLOORING INSTALLATION</h2>
        <div className="row installation-list">
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img
                onClick={openGalleryFloorings}
                src={Flooring1.src}
                alt="Flooring"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Flooring</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={floorings}
              onInit={onInitFloorings}
              data-sub-html="Flooring"
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGallerySandFloorings} src={SandFlooring1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Sand Flooring</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={sandFloorings}
              data-sub-html="Sand Flooring"
              onInit={onInitSandFloorings}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img
                onClick={openGalleryVinylAndLaminates}
                src={VinylAndLaminate1.src}
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Laminate & Vinyl</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={vinylAndLaminates}
              onInit={onInitVinylAndLaminates}
              plugins={[lgZoom, lgVideo]}
              data-sub-html="Laminate & Vinyl"
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryStairs} src={Stair1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Stairs</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={stairs}
              onInit={onInitStairs}
              data-sub-html="Stairs"
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryTiles} src={Tile1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Tiles</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={tiles}
              data-sub-html="Tiles"
              onInit={onInitTiles}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryVents} src={Vent2.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Vents</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={vents}
              onInit={onInitVents}
              data-sub-html="Vents"
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyLightGallery;
