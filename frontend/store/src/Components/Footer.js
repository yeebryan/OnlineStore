import React from 'react';
import {
  Box,
  Stack,
  Text,
  Link,
  chakra,
  Image,
  useColorModeValue,
  VisuallyHidden,
  SimpleGrid
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const AppStoreBadge = () => (
    <Link href="https://www.apple.com/ios/app-store/" isExternal>
      <Image
        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
        alt="Download on the App Store"
        width="140px"
        mb={2}
      />
    </Link>
  );
  
  const PlayStoreBadge = () => (
    <Link href="https://play.google.com/store" isExternal>
      <Image
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
        width="150px"
      />
    </Link>
  );

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={10}
        px={{ base: 4, md: 8 }}
        py={10}>
        <Stack align={'flex-start'}>
          <ListHeader>Company</ListHeader>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact Us</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Support</ListHeader>
          <Link href={'#'}>Help Center</Link>
          <Link href={'#'}>Safety Center</Link>
          <Link href={'#'}>Community Guidelines</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Legal</ListHeader>
          <Link href={'#'}>Cookies Policy</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Law Enforcement</Link>
          </Stack>

<Stack align={'flex-start'}>
  <ListHeader>Install App</ListHeader>
  <AppStoreBadge />
  <PlayStoreBadge />
</Stack>
</SimpleGrid>

<Box
borderTopWidth={1}
borderStyle={'solid'}
borderColor={useColorModeValue('gray.200', 'gray.700')}>
<Stack
  maxW={'6xl'}
  py={4}
  px={4}
  direction={{ base: 'column', md: 'row' }}
  spacing={4}
  justify={{ md: 'space-between' }}
  align={{ md: 'center' }}>
  <Text>© 2022 Chakra Templates. All rights reserved</Text>
  <Stack direction={'row'} spacing={6}>
    <SocialButton label={'Twitter'} href={'#'}>
      <FaTwitter />
    </SocialButton>
    <SocialButton label={'YouTube'} href={'#'}>
      <FaYoutube />
    </SocialButton>
    <SocialButton label={'Instagram'} href={'#'}>
      <FaInstagram />
    </SocialButton>
  </Stack>
</Stack>
</Box>
</Box>
  )}
  export default Footer;

