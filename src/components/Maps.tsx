"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

// Nhớ thay YOUR_MAPBOX_API_KEY bằng token của bạn
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29obzIwMjUiLCJhIjoiY201ZzdhMmZtMDVscjJrcTBxZG5na2FmZiJ9.PQe_k2trEJ7AoUQrEfyNpw";

const MapComponent = () => {
  // Sử dụng HTMLDivElement thay vì HTMLElement
  const mapContainer = useRef<HTMLDivElement | null>(null); // Đảm bảo kiểu là HTMLDivElement hoặc null

  useEffect(() => {
    if (mapContainer.current) {
      // Khởi tạo Mapbox map chỉ khi mapContainer có giá trị
      const map = new mapboxgl.Map({
        container: mapContainer.current, // Thẻ DOM chứa bản đồ
        style: "mapbox://styles/mapbox/streets-v11", // Kiểu bản đồ
        center: [-79.2564, 43.7482], // Tọa độ trung tâm (longitude, latitude)
        zoom: 12, // Mức zoom
      });

      // Thêm control để zoom vào/ra
      map.addControl(new mapboxgl.NavigationControl());

      return () => {
        // Dọn dẹp khi component bị unmount
        map.remove();
      };
    }
  }, []);

  return (
    <div
      ref={mapContainer} // ref chỉ sử dụng cho HTMLDivElement
      style={{ width: "100%", height: "400px" }} // Thiết lập kích thước cho bản đồ
    />
  );
};

export default MapComponent;
