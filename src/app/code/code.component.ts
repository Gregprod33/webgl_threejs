import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  // code1:any =  "../../assets/images/code1.jpg";
  // code2:any =  "../../assets/images/code2.jpg";
  // code3:any =  "../../assets/images/code3.jpg";
  // code4:any =  "../../assets/images/code4.jpg";
  // code5:any =  "../../assets/images/code5.jpg";
  // code6:any =  "../../assets/images/code6.jpg";
  // code7:any =  "../../assets/images/code7.jpg";
  // code8:any =  "../../assets/images/code8.jpg";

  code1: any = `
    const triangleVerticesColors = [
      .8, -.8, 0.0, // Position X Y Z of point A
      .23, 0.97, 0.78, 1.0, // Color R G B A of point A

      0.0, .8, 0.0, // Position X Y Z of point B
      0.27, .81, 1.0, 1.0, // Color R G B A of point B

      -.8, -.8, 0.0, // Position X Y Z of point C
      0.9, 0.6, 1.95, 1.0, // Color R G B A of point C
    ];
  `

  code2:any = `
  const triangleVertexPositionColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionColorBuffer);

  // And we provide the data :
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVerticesColors), gl.STATIC_DRAW);

  const vertexShader = getAndCompileShader('vertexShader');
  const fragmentShader = getAndCompileShader('fragmentShader');
  `

  code3: any = `
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  // And finaly :
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
  `

  code4: any = `
  const positionAtributeLocation = gl.getAttribLocation(shaderProgram, 'position');
  gl.enableVertexAttribArray(positionAtributeLocation);

  // Same for "vec4 colors"
  const colorAtributeLocation = gl.getAttribLocation(shaderProgram, 'color');
  gl.enableVertexAttribArray(colorAtributeLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionColorBuffer);
  `

code5:any = `
  gl.vertexAttribPointer(
    positionAtributeLocation,
   3, // The size : X Y Z, so 3.
    gl.FLOAT, // The type.
    0, // Normalisation (not needed for now)
    7 * 4, // How many numbers between each sequence of positions,
    //for example : [ x, y, z, r, g, b, a ...] so 7.
    //BUT we need to provide the number of bytes... A float is 4 bytes, then 7*4 !
    0, // The offset, 0, as positions start at 0 in our "triangleVerticesColors" array.
  );

  // Same for the colors :
  gl.vertexAttribPointer(
    colorAtributeLocation,
    4, // The size : R G B A so 4.
    gl.FLOAT, // The type.
    0, // Normalisation (not needed for now)
   7 * 4, // Between each sequence we still have 7 numbers
    //(3 for positons and 4 for colors).
    3 * 4, // The offset, 3, as colors are after the positions in our array.
  );`

  code6:any =`
  requestAnimationFrame(() => render());

  function render() {
    gl.clearColor(.49, .5, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3); // 3 as we have only 3 vertices
    requestAnimationFrame(() => render());
  }
  `

  code7: any = `
  const getAndCompileShader = id => {
    const shaderText = document.getElementById(id).textContent.trim();
    let shader;
  
    if (id === 'vertexShader') {
      shader = gl.createShader(gl.VERTEX_SHADER);
    } else if (id === 'fragmentShader') {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    }
  
    gl.shaderSource(shader, shaderText);
    gl.compileShader(shader);
  `

  code8: any = `
  const renderer = new THREE.WebGLRenderer();
  const geometry = new THREE.BufferGeometry();
  const triangleData = [
    0, 0, 0,
    1, 0, 0,
    0, 1, 0
  ];

  const triangleArray = new Float32Array(triangleData);
  const triangleAttribute = new THREE.BufferAttribute(
    triangleArray,
    3,
    false
  );

  geometry.attribute('position, triangleAttribute)
  const material = new THREE.MeshBasicMaterial();
  const triangle = new THREE.Mesh(geometry, material);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 800 / 400, 0, 1000);
  scene.add(triangle);
  camera.position.set(10, 10, 10);
  camera.lookAt(triangle.position);
  renderer.render(scene, camera);
  `
  constructor(private router: Router) { }

  ngOnInit(): void {}

  goNextPage(){
    this.router.navigate(['/librairies']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/technique']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
