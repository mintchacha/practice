const Init = () => {
    const WIDTH = innerWidth,
        HEIGHT = innerHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x81ecec);

        const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1,1000);
        scene.add(camera);

        const geo = new THREE.BoxGeometry(10,10,10);
        const material = new THREE.MeshLambertMaterial({color: 0x55efc4});
        const mesh = new THREE.Mesh(geo, material);
        scene.add(mesh);
        
        //OBJloader
        const loader = new THREE.OBJLoader();
        loader.load('images/qustion.obj', function (object) {
            // 모델 로드가 완료되었을때 호출되는 함수
            object.scale.x = 0.1;
            object.scale.y = 0.1;
            object.scale.z = 0.1;
            object.rotation.y = (Math.PI * 90) / 180;
            console.log(object);
            obj.push(object)
            scene.add(object);
            loadobj = object
        }, function (xhr) {
            // 모델이 로드되는 동안 호출되는 함수
            console.log(xhr.loaded / xhr.total * 100, '% loaded');
        }, function (error) {
            // 모델 로드가 실패했을 때 호출하는 함수
            alert('모델을 로드 중 오류가 발생하였습니다.');
        });
        const light = new THREE.PointLight();
        light.position.set(50,50,50);
        scene.add(light);

        const renderer = new THREE.WebGLRenderer({antialias : true});
        renderer.setSize(WIDTH,HEIGHT);
        //scene의 background를 설정하지 않았다면 밑의 코드로 배경색을 정할수도 있습니다.
        // renderer.setClearColor(0x81ecec);
        document.body.appendChild(renderer.domElement);

        camera.position.z = 30;
        mesh.rotation.x = (Math.PI * 20) / 180;
        mesh.rotation.y = (Math.PI * 20) / 180;

        renderer.render(scene,camera);

        const handleResize = () => {
            camera.adpect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerWidth,innerHeight);
            renderer.render(scene,camera);
        }
        addEventListener('resize',handleResize);

        const rotateObj = () => {
            const speed = Math.floor(Math.random() * 3);
            mesh.rotation.y += (Math.PI) * speed / 180;
            renderer.render(scene,camera);
            requestAnimationFrame(rotateObj);
        }
        requestAnimationFrame(rotateObj);

        mesh.rotation.x = (Math.PI * 20) / 180;
        mesh.rotation.y = (Math.PI * 20) / 180;

        const obj = [mesh];
        const dragControls = new THREE.DragControls(obj, camera, renderer.domElement);

        renderer.render(scene, camera);
}


Init();
// window.addEventListener("load", Init);