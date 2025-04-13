function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx= [-1,1,0,0] // 상하 좌우
    const dy = [0,0,-1,1]
    
    const visited=Array.from(Array(n),() => Array(m).fill(false))
    const queue = []
    
    queue.push([0,0,1])
    visited[0][0] = true
    
    while(queue.length > 0){
        const [x,y,d] = queue.shift();
        
        if(x===n-1 && y=== m-1){
            return d
        }
        
        for (let i =0; i<4; i++){
            const nx = x +dx[i]
            const ny = y + dy[i]
            
            if(nx >= 0 && nx < n && ny>=0 && ny< m&&maps[nx][ny] ===1 && !visited[nx][ny]){
                visited[nx][ny] = true
                queue.push([nx,ny,d+1])
                    
            }
                
            }
        }
    return -1

}