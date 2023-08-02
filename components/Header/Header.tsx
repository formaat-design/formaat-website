"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Actionable, View, Button, Text, Link, Hidden } from "reshaped";
import s from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();
  const isInterviewsSubpage = pathname.startsWith("/interviews/");

  return (
    <View
      paddingBlock={3}
      paddingInline={4}
      direction="row"
      align="center"
      gap={3}
      position="fixed"
      insetTop={0}
      insetStart={0}
      insetEnd={0}
      className={s.root}
      zIndex={100}
    >
      <View direction="row" gap={3} align="center" divided grow>
        <NextLink href="/" passHref legacyBehavior>
          <Actionable>
            <Text variant="featured-3" weight="bold">
              formaat
            </Text>
          </Actionable>
        </NextLink>

        {isInterviewsSubpage && (
          <Hidden hide={{ s: true, m: false }}>
            <Text variant="body-3" color="neutral-faded">
              <NextLink href="/interviews" passHref legacyBehavior>
                <Link variant="plain" color="inherit">
                  Design system interviews
                </Link>
              </NextLink>
            </Text>
          </Hidden>
        )}
      </View>

      <Button
        variant="ghost"
        href="mailto:hello@reshaped.so"
        attributes={{ target: "_blank" }}
      >
        Contact us
      </Button>
    </View>
  );
};

export default Header;
