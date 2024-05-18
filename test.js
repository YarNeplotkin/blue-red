if(heroes[0].yi>=guy.Y-28 && heroes[0].xi>=guy.X && guy.type==="platform"  && guy.color==="gold"){
    if(heroes[0].yi<guy.Y-20 && heroes[0].xi<=guy.X+40){
        massivStructur.forEach(meh=>{
            if(meh.type==="lift" && meh.color==="gold"){
                if(meh.Y<=85){
                    meh.Y++
                }
            }
        })
    }
}