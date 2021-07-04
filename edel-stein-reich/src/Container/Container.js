import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div className="Container" style={{width:props.width}}>
      {
        (() => {
          let ncols = props.imgs.length
          let cols = props.imgs.map((s) => {
            return (
              <div class="column" style={{flex:100/ncols+"%"}}>
                <img src={s} style={{width:"100%"}}/>
              </div>
            )
          })

          return cols
        })()
      }
    </div>
  );
}

export default Container;
