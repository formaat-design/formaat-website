import NextLink from "next/link";
import { useRouter } from "next/router";
import { Actionable, Stack, Frame, Button, Text, Container } from "reshaped";

const Header = () => {
  const { asPath } = useRouter();
  const isHomepage = asPath === "/";
  // const isInterviewsSubpage = asPath.startsWith("/interviews/");
  const width = isHomepage ? 1120 : 780;

  return (
    <Container width={`${width}px`}>
      <Frame padding={[3, 0]}>
        <Stack direction="row" align="center">
          <Stack.Item grow>
            <Stack direction="row" gap={3} align="center" divided>
              <NextLink href="/" passHref>
                <Actionable>
                  <Text variant="title-3">formaat</Text>
                </Actionable>
              </NextLink>
              {/* {isInterviewsSubpage && (
                <Text variant="body-medium-2" color="neutral-faded">
                  <NextLink href="/interviews" passHref>
                    <Link variant="plain" color="inherit">
                      Design system interviews
                    </Link>
                  </NextLink>{" "}
                </Text>
              )} */}
            </Stack>
          </Stack.Item>
          <Button.Aligner position="end">
            <Button
              variant="ghost"
              href="mailto:hello@reshaped.so"
              attributes={{ target: "_blank" }}
            >
              Contact us
            </Button>
          </Button.Aligner>
        </Stack>
      </Frame>
    </Container>
  );
};

export default Header;
