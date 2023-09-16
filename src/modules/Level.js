import '../styles/Level.css';
import { ReactP5Wrapper } from '@p5-wrapper/react';

function sketch(p5) {
    class Grid{
	    constructor(x, y){
		    let xSize = x;
		    let ySize = y;
	    }
	
	    addPiece(x, y, piece){
		    grid[x, y] = piece;
	    }
    }
    let img;
    let str = "9/16/2023_8x8_";

    let gameGrid;
    const Pieces = {
    	Emitter:'Emitter',
    	Mirror:'Mirror',
    	DoubleMirror:'DoubleMirror',
    	Block:'Block',
    	Prism:'Prism',
    	TransMirror:'TransMirror',
    	Wall:'Wall'
    }

    let sprites;
    p5.setup = () => {
        createCanvas(400, 400);
	    background(50, 50, 50);
	    //sprites = {'Mirror':loadImage('1694500795large-white-cloud.svg')};
	    gameGrid = new Grid(8, 8);
    };
  
    p5.draw = () => {
      background(20, 20, 40);
    	//image(img, 20, 20, 1000, 1000);
    	stroke(0);
    	strokeWeight(5);
    	fill(80);
    	rect(2.5, 2.5, 95, 400);
    	for(let y = 0; y < gameGrid.ySize; y++){
    		for(let x = 0; x < gameGrid.xSize; x++){
    			rect(125, 25, gameGrid.xSize * 25, gameGrid.ySize * 25);
    		}
    	}
    };
  }

function Level() {
    return (
        <ReactP5Wrapper sketch={sketch} />
    )
}

export default Level;
