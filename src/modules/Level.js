import '../styles/Level.css';
import { ReactP5Wrapper } from '@p5-wrapper/react';

const Piece = {
    None:'None',
    Emitter:'Emitter',
    Mirror:'https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Mirror_One_Side.svg', // M
	Mirror2:'no', //N
	Mirror3:'no2', //m
	Mirror4:'no3', //n
    DoubleMirror:'DoubleMirror',
    Block:'Block',
    Prism:'Prism',
    TransMirror:'TransMirror',
    Wall:'Wall',
	Target:'Target'
}

let levels = {
    "9/16/2023": {
        "grid": [
            'XXEXXXXX',
            'X      X',
            'X M  m X',
            'X      X',
            'X  N n X',
            'X      X',
            'X      X',
            'XXXTXXXX',
        ]
    }
}

class Grid{
    constructor(x, y, day){
        this.xSize = levels[day]["grid"][0].length;
        this.ySize = levels[day]["grid"].length;
        this.grid = [];
        for (const line of levels[day]["grid"]) {
            let output_bracket = [];
            for (const char of line) {
                let output = Piece.None;
                switch (char) {
                    case 'X':
                        output = Piece.Wall;
                    	break;
                    case 'M':
                        output = Piece.Mirror;
                    	break;
					case 'N':
						output = Piece.Mirror2;
						break;
					case 'm':
						output = Piece.Mirror3;
						break;
					case 'n':
						output = Piece.Mirror4;
						break;

                }
                output_bracket.push(output);
            }
            this.grid.push(output_bracket);
        }
    }
}

function sketch(p5) {
    let gameGrid;

    let Sprite = {
        None:'None',
        Emitter:'Emitter',
        Mirror: p5.loadImage(Piece.Mirror),
        DoubleMirror:'DoubleMirror',
        Block:'Block',
        Prism:'Prism',
        TransMirror:'TransMirror',
        Wall:'Wall'
    }

    let myImage = p5.loadImage('https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Mirror_One_Side.svg');

    p5.setup = () => {
        p5.createCanvas(900, 600);
	    p5.background(50, 50, 50);
	    gameGrid = new Grid(8, 8, "9/16/2023");
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
                // if ((x + y) % 2 == 1) p5.fill(170)
                // else p5.fill(200)
                let tile_w = (600 - 8 - 4) / gameGrid.xSize;
                let tile_h = (600 - 8 - 4) / gameGrid.ySize;

                let piece_type = gameGrid.grid[y][x];
				
				p5.fill(200);
				p5.rect(106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
                switch (piece_type) {
                    case Piece.Wall:
                        p5.fill(150);
                        p5.rect(106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
                    break;
                    case Piece.Mirror:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(0);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(myImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror2:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(myImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror3:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(Math.PI);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(myImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror4:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(3*Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(myImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
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
