import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Tag,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
            {about.cv?.display && (
              <Button
                data-border="rounded"
                href={about.cv.href}
                variant="primary"
                size="m"
                weight="default"
                prefixIcon="document"
                label={about.cv.label}
              />
            )}
            </Row>
          </RevealFx>
        </Column>
      </Column>
      {about.highlights?.display && (
        <RevealFx translateY="12" delay={0.5} fillWidth>
          <Row fillWidth gap="12" wrap paddingX="l" s={{ horizontal: "center" }}>
            {about.highlights.items.map((item) => (
              <Column
                key={item.label}
                flex={1}
                minWidth={9}
                padding="16"
                radius="l"
                border="neutral-alpha-medium"
                background="neutral-alpha-weak"
                gap="4"
              >
                <Text variant="display-strong-xs" onBackground="brand-strong">
                  {item.value}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.label}
                </Text>
              </Column>
            ))}
          </Row>
        </RevealFx>
      )}
      <Row fillWidth wrap gap="8" horizontal="center" paddingX="l">
        <Text variant="label-default-s" onBackground="neutral-weak" paddingRight="4">
          Jump to:
        </Text>
        {[
          ["Profile", "profile"],
          ["Experience", "experience"],
          ["Projects", "projects"],
          ["Education", "education"],
          ["Skills", "skills"],
          ["Certificates", "certificates"],
        ].map(([label, id]) => (
          <SmartLink key={id} href={`${about.path}#${id}`}>
            <Tag size="m">{label}</Tag>
          </SmartLink>
        ))}
      </Row>
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs" paddingX="l">
          Latest project
        </Heading>
        <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx>
      </Column>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs" paddingX="l">
          More projects
        </Heading>
        <Projects range={[2]} />
      </Column>
      <Mailchimp />
    </Column>
  );
}
