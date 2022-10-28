import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <div>
      <Box>
        <Flex
          minWidth="max-content"
          alignItems="center"
          height="30vh"
          justifyContent="center"
          gap="2"
          p="2"
          bgColor="#447761"
          color="white"
        >
          <Box>
            <Breadcrumb separator="-">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
