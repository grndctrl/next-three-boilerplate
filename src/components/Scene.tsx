import { Box, OrbitControls } from '@react-three/drei';

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <pointLight position={[1, 3, 2]} intensity={0.75} />
      <ambientLight intensity={0.25} />
      <Box>
        <meshStandardMaterial color={'#9195bb'} />
      </Box>
    </>
  );
};

export default Scene;
