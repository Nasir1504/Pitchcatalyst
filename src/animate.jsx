import * as THREE from 'three'
import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, OrbitControls, Stars, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import * as easing from 'maath/easing'
import { damp3 } from 'maath/easing'

function ShootingStar() {
    const ref = useRef();
    const [mouseMoved, setMouseMoved] = useState(false);

    useFrame(({ mouse, camera, raycaster }, delta) => {
        raycaster.setFromCamera(mouse, camera);
        const target = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), target)) {
            damp3(ref.current.position, target.toArray(), 0.1, delta);
        }
        if (!mouseMoved && (mouse.x !== 0 || mouse.y !== 0)) {
            setMouseMoved(true);
        }
    });

    return (
        <>
            <Trail width={0.8} length={8} color="white" attenuation={t => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.05]} />
                    <meshBasicMaterial color={[10, 10, 10]} toneMapped={false} />
                    {mouseMoved && (
                        <Sparkles
                            count={30}
                            size={0.15}
                            color="white"
                            speed={0.5}
                            opacity={1}
                        />
                    )}
                </mesh>
            </Trail>
        </>
    );
}

export default function Animate() {
    return (
        <Canvas camera={{ position: [0, 0, 15] }}>
            <color attach="background" args={['black']} />
            <ambientLight intensity={1} />
            <ShootingStar />
            <Stars count={400} speed={1.5} saturation={false} />
            <OrbitControls enableZoom={false} />
            <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={1} mipmapBlur />
            </EffectComposer>
        </Canvas>
    );
}
