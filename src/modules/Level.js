import '../styles/Level.css';
import { ReactP5Wrapper } from '@p5-wrapper/react';

const Piece = {
    None:'None',
    Emitter:'https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Laser_Pointer_1.svg',
    Mirror:'https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Mirror_One_Side.svg', // M
	Mirror2:'no', //N
	Mirror3:'no2', //m
	Mirror4:'no3', //n
    DoubleMirror:'DoubleMirror',
    Block:'Block',
    Prism:'Prism',
    TransMirror:'TransMirror',
    Wall:'Wall',
	Target:'https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Laser_Recieved.svg'
}

const dir = {
	UP:'U',
	DOWN:'d',
	RIGHT:'r',
	LEFT:'l'
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
					case 'T':
						output = Piece.Target;
						break;
					case 'E':
						output = Piece.Emitter;
						break;

                }
                output_bracket.push(output);
            }
            this.grid.push(output_bracket);
        }
    }
}


/*function laser(gameGrid, p5, laserImg, startX, startY, direction){
	if(direction == dir.UP || direction == dir.DOWN){
		let di = 1;
		let i;
		if(direction == dir.UP)di = -1;
		loop:
		for(i = startY + di; ; i += di){
			switch(gameGrid.grid[i][startX]){
				case Piece.Wall:
				case Piece.Target:
					break loop;
				case Piece.Mirror:
					if(direction == dir.DOWN)
						laser(gameGrid, p5, laserImg, startX, i, dir.RIGHT);
					else if(direction == dir.LEFT)
						laser(gameGrid, p5, laserImg, startX, i, dir.UP);
					break loop;
			}
		}
		p5.imageMode(p5.CENTER);
		p5.image(laserImg, 106 + (startX+.5)*63.5, 6+(startY + i+.5)/2*63.5, 8, Math.abs(startY - i));
		p5.imageMode(p5.CORNER);
	}
}*/

function sketch(p5) {
    let gameGrid;

    let Sprite = {
        None:'None',
        Emitter:p5.loadImage(Piece.Emitter),
        Mirror: p5.loadImage(Piece.Mirror),
        DoubleMirror:'DoubleMirror',
        Block:'Block',
        Prism:'Prism',
        TransMirror:'TransMirror',
        Wall:'Wall',
		Target:p5.loadImage(Piece.Target)
    }

    let mirrorImage = p5.loadImage('https://raw.githubusercontent.com/swimdoctor/Lazal/0000eb7397cab0ae82133c1ca215e2afa3107700/public/Mirror_One_Side.svg');
	let targetImage = p5.loadImage('https://raw.githubusercontent.com/swimdoctor/Lazal/3e52801636893bc0e1e3f7f0bdcaa37108c14ba8/public/Laser_Recieved.svg');
	let emitterImage = p5.loadImage('https://raw.githubusercontent.com/swimdoctor/Lazal/3e52801636893bc0e1e3f7f0bdcaa37108c14ba8/public/Laser_Pointer_1.svg');
	//let laserImage = p5.loadImage('https://raw.githubusercontent.com/swimdoctor/Lazal/e12dce3998828356fc6e5d82d35998fad062e86e/public/Laser.svg');

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
                        p5.image(mirrorImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror2:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(mirrorImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror3:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(Math.PI);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(mirrorImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Mirror4:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(3*Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(mirrorImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Emitter:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(-Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(emitterImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                    case Piece.Target:
						p5.push();
						p5.translate(106 + x * tile_w + tile_w*.5, 6 + y * tile_h + tile_h*.5);
						p5.rotate(Math.PI/2);
						p5.translate(-(106 + x * tile_w + tile_w*.5), -(6 + y * tile_h + tile_h*.5));
                        p5.image(targetImage, 106 + x * tile_w, 6 + y * tile_h, tile_w, tile_h);
						p5.pop();
                    break;
                }
    		}
    	}
		//laser(gameGrid, p5, laserImage, 2, 0, dir.DOWN);
    };
}

function Level() {
    return (
        <ReactP5Wrapper sketch={sketch} />
    )
}

export default Level;
