import { useEffect, useRef, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { db, auth } from "./firebase.js";
import { doc, collection, setDoc, onSnapshot } from "firebase/firestore";

const markers = [
  {
    lat: 47.9119453,
    lng: 106.8983796,
  },
  {
    lat: 47.9138608,
    lng: 106.912096,
  },
];

export const Main = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [makerIndex, setMakerIndex] = useState(0);
  const [myCoords, setMyCoords] = useState({});

  useEffect(() => {
    mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 47.9173099, lng: 106.9149359 },
      zoom: 14,
    });
    const locationWatcherId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setMyCoords({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      },
      ({ message }) => {
        console.error(message);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(locationWatcherId);
    };
  }, []);

  useEffect(() => {
    if (!myCoords.lat) return;

    mapRef.current.setCenter(myCoords);
    const myMarker = new window.google.maps.Marker({
      position: myCoords,
      map: mapRef.current,
    });

    setDoc(doc(db, "Location", auth.currentUser.uid), {
      lat: myCoords.lat,
      lng: myCoords.lng,
      id: auth.currentUser.uid,
      phone: auth.currentUser.phoneNumber,
    });
    let arr = [];

    onSnapshot(collection(db, "Location"), (col) => {
      arr.forEach((marker) => {
        marker.setMap(null);
      });
      col.docs.forEach((doc) => {
        let a = new window.google.maps.Marker({
          position: { lat: doc.data().lat, lng: doc.data().lng },
          map: mapRef.current,
        });
        arr.push(a);
      });
    });
    return () => {
      myMarker.setMap(null);
    };
  }, [myCoords]);

  const onAddMarker = () => {
    new window.google.maps.Marker({
      position: markers[makerIndex],
      map: mapRef.current,
    });
    setMakerIndex(makerIndex + 1);
  };

  const onClickSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("asd");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      Main
      <button onClick={onAddMarker}>Add Markers</button>
      <button onClick={onClickSignOut}> Logout </button>
      <div id="map" ref={mapContainerRef}></div>
    </div>
  );
};
