import { useState } from "react";
import useFetch from "../utils/FetchHook";
import { api } from "./../config/properties";
import { createPortal } from "react-dom";

export const AlbumsWithHook = () => {
  const [data] = useFetch(`${api.root}/albums`);
  const [portalUse, setPortalUse] = useState(false);
  const container = document.getElementById("albums-header");
  return (
    <div id="album-hook">
      <div id="albums-header"></div>
      {portalUse && createPortal(<p>This is a portal code</p>, container)}
      <button
        onClick={() => {
          setPortalUse(!portalUse);
        }}
      >
        Portal
      </button>
      {data &&
        data.map((album) => {
          return (
            <div key={album.id}>
              <p>{album.title}</p>
            </div>
          );
        })}
    </div>
  );
};
