import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Trail } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShootingStar({ start, direction, speed, delay = 3 }) {
    const ref = useRef()
    const [active, setActive] = useState(false)

    const dir = useMemo(() => new THREE.Vector3().copy(direction).normalize(), [direction])

    useFrame((_, delta) => {
        if (active) {
            ref.current.position.addScaledVector(dir, speed * delta);
        }
    });

    const launch = () => {
        if (!active) {
            ref.current.position.copy(start)
            setActive(true)
            setTimeout(() => setActive(false), 1000) // deactivate after move duration
        }
    }

    useEffect(() => {
        if (!active) {
            const timeout = setTimeout(launch, delay * 1)
            return () => clearTimeout(timeout)
        }
    }, [active, delay])

    return (
        <>
            <mesh ref={ref} visible={active} onClick={launch}>
                <sphereGeometry args={[0.1]} />
                <meshBasicMaterial
                    color={[5, 2, 1]}
                    toneMapped={false}
                />
            </mesh>
            <Trail target={ref} width={0.3} length={6} attenuation={(t) => t * t} color={[5, 2, 1]} />

            <Trail width={0.3} length={6} attenuation={t => t * t} color={[5, 2, 1]}>
                <mesh position={[0, 0, 0]} visible={active}>
                    <sphereGeometry args={[0.1]} />
                    <meshBasicMaterial
                        color={[5, 2, 1]}
                        toneMapped={false}
                    />
                </mesh>
            </Trail>
        </>
    )
}

export default function Animate2() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <color attach="background" args={['black']} />

            <ambientLight intensity={1} />
            <ShootingStar
                start={new THREE.Vector3(0, 0, 0)}
                direction={new THREE.Vector3(1, 0.2, 0)}
                speed={10}
                delay={5}
            />
            <EffectComposer disableNormalPass multisampling={0}>
                <Bloom luminanceThreshold={1} mipmapBlur luminanceSmoothing={0.1} intensity={1.5} />
            </EffectComposer>
        </Canvas>
    )
}
