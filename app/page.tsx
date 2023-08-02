import NextLink from "next/link";
import {
  View,
  Text,
  Button,
  MenuItem,
  Link,
  Image,
  Card,
  Icon,
} from "reshaped";
import { getInterviews } from "../utilities/data";
import InterviewCard from "../components/InterviewCard";
import IconCheckmark from "../icons/Checkmark";

export default async function Page() {
  const allInterviews = await getInterviews();
  const interviews = allInterviews.slice(0, 3);

  return (
    <View gap={10}>
      <Text variant="featured-2" weight="bold">
        formaat
      </Text>
      <View direction={{ s: "column", m: "row" }} gap={{ s: 20, xl: 30 }}>
        <View
          gap={{ s: 4, m: 6 }}
          align="start"
          width={{ s: "100%", xl: "300px" }}
        >
          <View maxWidth="300px">
            <View.Item>
              <Text variant="body-2" weight="medium" as="span">
                We are a tiny design system studio based&nbsp;in&nbsp;Amsterdam.
              </Text>
              &nbsp;
              <Text variant="body-2" as="span">
                With more than a decade of&nbsp;experience, we explore how
                design&nbsp;systems will&nbsp;work tomorrow.
              </Text>
            </View.Item>
          </View>
          <Button variant="faded" href="mailto:hello@reshaped.so">
            Contacts us
          </Button>
        </View>
        <View gap={{ s: 2, m: 8 }} grow>
          <View.Item>
            <Text variant="body-2" weight="medium" as="span">
              Made by us.
            </Text>
            &nbsp;
            <Text variant="body-2" as="span">
              Products that we’ve crafted with utmost care and would love to
              share with the design system community.
            </Text>
          </View.Item>
          <MenuItem.Aligner>
            <View gap={2}>
              <MenuItem
                roundedCorners
                href="https://reshaped.so"
                attributes={{ target: "_blank" }}
                size="large"
                startSlot={
                  <Card padding={3} elevated>
                    <Image
                      width={5}
                      src="/img/studio/reshaped-icon.svg"
                      alt="Reshaped logo"
                    />
                  </Card>
                }
              >
                <Text variant="body-3" weight="medium">
                  Reshaped design system
                </Text>
                <Text variant="body-3" weight="regular" color="neutral-faded">
                  Design system built for your scale in React & Figma
                </Text>
              </MenuItem>

              <MenuItem
                roundedCorners
                href="https://www.figma.com/community/plugin/1132648122057236517/Reshaped"
                attributes={{ target: "_blank" }}
                size="large"
                startSlot={
                  <Card padding={3} elevated>
                    <View width={5} height={5} align="center" justify="center">
                      <Image
                        src="/img/studio/figma-icon.svg"
                        alt="Figma logo"
                        height={5}
                      />
                    </View>
                  </Card>
                }
              >
                <Text variant="body-3" weight="medium">
                  Reshaped tokens
                </Text>
                <Text variant="body-3" weight="regular" color="neutral-faded">
                  Free Figma plugin to manage theme styles and variables in one
                  click
                </Text>
              </MenuItem>

              <MenuItem
                roundedCorners
                href="https://designsystemchecklist.com"
                attributes={{ target: "_blank" }}
                size="large"
                startSlot={
                  <Card padding={3} elevated>
                    <View width={5} height={5} align="center" justify="center">
                      <Icon svg={IconCheckmark} size={5} />
                    </View>
                  </Card>
                }
              >
                <Text variant="body-3" weight="medium">
                  Design system checklist
                </Text>
                <Text variant="body-3" weight="regular" color="neutral-faded">
                  An open-source checklist to help you plan, build and grow your
                  design system
                </Text>
              </MenuItem>
            </View>
          </MenuItem.Aligner>
        </View>
        <View grow>
          <View gap={{ s: 2, m: 8 }}>
            <View.Item>
              <Text variant="body-2" weight="medium" as="span">
                Design system interviews.
              </Text>
              &nbsp;
              <Text variant="body-2" as="span">
                A collection of interviews with the industry experts to help you
                learn about how design systems are built and maintained at
                scale.
              </Text>
            </View.Item>
            <MenuItem.Aligner>
              <View gap={3}>
                {interviews.map((item) => (
                  <InterviewCard data={item} key={item.id} />
                ))}
                <View.Item>
                  <NextLink href="/interviews" passHref legacyBehavior>
                    <Link variant="plain">See all interviews</Link>
                  </NextLink>
                </View.Item>
              </View>
            </MenuItem.Aligner>
          </View>
        </View>
      </View>
    </View>
  );
}
