import NextLink from "next/link";
import { useRouter } from "next/router";
import { Actionable, Avatar, Stack, Frame, Button, Link, Text } from "reshaped";
import s from "./Header.module.css";

const Header = () => {
  const { asPath } = useRouter();
  const isHomepage = asPath === "/";
  const isInterviewsSubpage = asPath.startsWith("/interviews/");

  return (
    <Frame padding={[3, 4]} className={s.root}>
      <Stack direction="row" align="center">
        <Stack.Item grow>
          {!isHomepage && (
            <Stack direction="row" gap={3} align="center" divided>
              <NextLink href="/" passHref>
                <Actionable>
                  <Avatar color="neutral" initials="" size={8} squared />
                </Actionable>
              </NextLink>
              {isInterviewsSubpage && (
                <Text variant="body-medium-2" color="neutral-faded">
                  <NextLink href="/interviews" passHref>
                    <Link variant="plain" color="inherit">
                      Design system interviews
                    </Link>
                  </NextLink>{" "}
                </Text>
              )}
            </Stack>
          )}
        </Stack.Item>
        <Button variant="ghost">Contact us</Button>
      </Stack>
    </Frame>
  );
};

export default Header;
