import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene';

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Home;
