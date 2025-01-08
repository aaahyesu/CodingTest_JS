function solution(video_len, pos, op_start, op_end, commands) {
  // 모든 시간을 초 단위로 변환
  let posTime = toSeconds(pos);
  const startTime = toSeconds(op_start);
  const endTime = toSeconds(op_end);
  const videoTime = toSeconds(video_len);

  // 현재 위치가 오프닝 구간인 경우 오프닝이 끝나는 위치로 이동
  if (posTime >= startTime && posTime <= endTime) {
    posTime = endTime;
  }

  for (let command of commands) {
    // 단순히 10초씩 이동
    posTime += command === "next" ? 10 : -10;

    // 범위 체크
    if (posTime < 0) posTime = 0;
    if (posTime > videoTime) posTime = videoTime;

    // 오프닝 구간 체크
    if (posTime >= startTime && posTime <= endTime) {
      posTime = endTime;
    }
  }

  // 초를 "분:초" 형식으로 변환
  const minutes = Math.floor(posTime / 60);
  const seconds = posTime % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function toSeconds(time) {
  const [min, sec] = time.split(":").map(Number);
  return min * 60 + sec;
}