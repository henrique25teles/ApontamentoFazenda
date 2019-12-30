import { useRef, useEffect } from "react";

export function convertMiliSecondsToTimeElapsed(miliSeconds: number) : string {
    var sec_num = Math.floor(miliSeconds / 1000);
    var hours   = Math.floor(sec_num / 3600).toString();
    var minutes = Math.floor((sec_num - (parseInt(hours) * 3600)) / 60).toString();
    var seconds = (sec_num - (parseInt(hours) * 3600) - (parseInt(minutes) * 60)).toString();

    if (parseInt(hours)   < 10) {hours   = "0"+hours;}
    if (parseInt(minutes) < 10) {minutes = "0"+minutes;}
    if (parseInt(seconds) < 10) {seconds = "0"+seconds;}

    return hours+':'+minutes+':'+seconds;
}

export function useInterval(callback: Function, delay: number) {
    const savedCallback = useRef<Function>();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}