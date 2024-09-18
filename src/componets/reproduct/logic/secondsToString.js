function secondsToString(seconds) {
    if(!seconds){
        return "00" + ':' + "00" + ':' + "0"
    }
  let hour = parseInt(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  let minute = parseInt((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  let second = seconds % 60;
  second = Math.ceil((second < 10)? '0' + second : second);
  return hour + ':' + minute + ':' + second;
}

export default secondsToString