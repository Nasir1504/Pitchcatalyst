import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShootingStar() {
    const ref = useRef()

    // =============================
    // Spiral Path Animation
    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime() * 2
    //     ref.current.position.set(Math.sin(t) * 4, Math.atan(t) * Math.cos(t / 2) * 2, Math.cos(t) * 4)
    //     const radius = 5 - t * 0.2; // slowly shrinking
    // })

    // =============================
    // Circular Path Animation
    // useFrame((state, delta) => {
    //     const t = state.clock.getElapsedTime();
    //     const radius = 6 - t * 0.1;
    //     ref.current.position.set(
    //         Math.cos(t * 1.2) * radius,
    //         Math.sin(t * 0.5) * 1.5 + Math.sin(t * 0.2) * 0.5,
    //         Math.sin(t * 1.2) * radius
    //     );
    // });

    // =============================
    // Straight Line Animation
    // useFrame((state, delta) => {
    //     const speed = 10; // units per second
    //     ref.current.position.x += speed * delta;
    //     ref.current.position.y += speed * delta * 0.2; // e.g. slight upward drift
    // });


    // =============================
    //Straight Path Toward a Target
    // const start = new THREE.Vector3(0, 0, 0);
    // const end = new THREE.Vector3(5, 2, 0);
    // const speed = 10; // units per second

    // useFrame((state, delta) => {
    //     ref.current.position.lerp(end, delta * speed);
    // });


    // ============================

    // const start = useMemo(() => new THREE.Vector3(-10, 0, 0), [])
    // const end = useMemo(() => new THREE.Vector3(10, 2, 0), [])


    // const start = new THREE.Vector3(0, 0, 0)
    // const end =  new THREE.Vector3(0, 0, 0)    
    // const direction = useMemo(() => new THREE.Vector3().subVectors(end, start).normalize(), [start, end])
    // const speed = 15 // units/sec

    // useFrame((_, delta) => {
    //     if (!ref.current.startSet) {
    //         ref.current.position.copy(start)
    //         ref.current.startSet = true
    //     }
    //     ref.current.position.addScaledVector(direction, speed * delta)
    // })


    // ============================
    // Straight Path Toward a Target with Direction Vector
    const start = new THREE.Vector3(0, 0, 0)
    const end = new THREE.Vector3(0, 0, 0)
    const direction = useMemo(() => new THREE.Vector3().subVectors(end, start).normalize(), [start, end])
    const speed = 15 // units/sec

    useFrame((_, delta) => {
        if (!ref.current.startSet) {
            ref.current.position.copy(start)
            ref.current.startSet = true
        }
        ref.current.position.addScaledVector(direction, speed * delta)
    })

    return (
        <Trail width={1} length={8} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.12]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
            </mesh>
        </Trail>
    )
}

export default function Animate() {
    return (
        <Canvas camera={{ position: [0, 0, 15] }} style={{ height: '100vh', width: '100vw' }}>
            <color attach="background" args={['black']} />
            <ambientLight intensity={1} />
            <ShootingStar />
            <Stars saturation={false} count={400} speed={1.5} />
            <OrbitControls enableZoom={false} />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} />
            </EffectComposer>
        </Canvas>
    )
}
