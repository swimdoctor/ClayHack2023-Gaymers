import '../styles/Level.css';
import { ReactP5Wrapper } from '@p5-wrapper/react';

function sketch(p5) {
    class Grid{
	    constructor(x, y){
		    this.xSize = x;
		    this.ySize = y;
            this.grid = []
            for (let i = 0; i < y; i++) {
                this.grid.push([])
                for (let j = 0; j < x; j++) {
                    this.grid[this.grid.length-1].push(Pieces.None);
                }
            }
	    }
	
	    addPiece(x, y, piece){
		    this.grid[x][y] = piece;
	    }
    }

    let img;
    let str = "9/16/2023_8x8_";

    let gameGrid;
    const Pieces = {
        None:'None',
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
        p5.createCanvas(900, 600);
	    p5.background(50, 50, 50);
	    //sprites = {'Mirror':loadImage('1694500795large-white-cloud.svg')};
	    gameGrid = new Grid(8, 8);
    };
  
    p5.draw = () => {
        p5.background(205, 205, 205);
    	p5.fill(150);
        p5.stroke(0);
        p5.strokeWeight(4);
    	p5.rect(4, 4, 100 - 8, 600 - 8);

    	p5.fill(150);
        p5.stroke(0);
        p5.strokeWeight(4);
    	p5.rect(4 + 100, 4, 600 - 8, 600 - 8);

        p5.strokeWeight(0);
        p5.fill(255, 0, 0)
    	for(let y = 0; y < gameGrid.ySize; y++){
    		for(let x = 0; x < gameGrid.xSize; x++){
                if ((x + y) % 2 == 1) p5.fill(170)
                else p5.fill(200)
                let tile_w = (600 - 8 - 4) / gameGrid.xSize;
                let tile_h = (600 - 8 - 4) / gameGrid.ySize;
    			p5.rect(106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);

                let piece_type = gameGrid.grid[x][y];
                switch (piece_type) {
                    case Pieces.Mirror:
                        
                }
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
