import * as L from 'leaflet';

declare module 'leaflet' {
  class Playback {
    constructor(map: Map, geoJSON: Object, callback: any, options: any);
    isPlaying(): boolean;
    setCursor(ms: Number|String);
	stop();
  }
}
