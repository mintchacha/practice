let scene, camera, renderer;
let geometry, material, cube;

const display = () => {
	//3D 공간 세팅
	scene = new THREE.Scene();
	//Perspective 카메라 생성 시야(몇도),종횡비(보통은 요소너비를 높이로 나눈 값),근거리 클리핑 평면, 원거리 클리핑 평면(값으로 지정된것 이상 멀거나 가까운 값은 렌더링 되지않게 함)
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
	//웹 렌더러 세팅
	renderer = new THREE.WebGLRenderer();
	//set size (가로크기,세로크기,해상도 false가 낮은해상도)
	renderer.setSize(window.innerWidth, window.innerHeight);
	//세팅된 렌더러 생성
	document.body.appendChild(renderer.domElement );
}

const object = () => {
	//정점과 면 포함 객체 세팅
	geometry = new THREE.BoxGeometry();
	//재질 생성 16진수 색상
	material = new THREE.MeshBasicMaterial({
		color:0x00ff00
	});
	//geometry에 material에 넣은 설정을 장면에 삽입하고 자유롭게 움직임
	cube = new THREE.Mesh(geometry, material);
	//add 로 메쉬를 불러와서 같은 공간에 생성
	scene.add(cube);
	//생성된 메쉬는 좌표(0.0.0)에 생성되어서 카메라를 움직임
	camera.position.z = 5;
}

const animate = () => {
	//setinterval 보다 사용자가 다른탭으로 이동할때 일시정지 되게 해주는 requestAnimationFrame을 이용
	requestAnimationFrame(animate);
	//애니메이션 설정
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	//렌더링 공간안에 설정애니메이션 적용
	renderer.render(scene,camera);	
}
display();
object();
animate();