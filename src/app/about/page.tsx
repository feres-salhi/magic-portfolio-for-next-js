import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.participations?.title ?? "",
      display: !!about.participations?.display,
      items: about.participations?.items.map((item) => item.name) ?? [],
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.certificates?.title ?? "",
      display: !!about.certificates?.display,
      items: about.certificates?.items.map((item) => item.name) ?? [],
    },
    {
      title: about.lessons?.title ?? "",
      display: !!about.lessons?.display,
      items: about.lessons?.items.map((item) => item.title) ?? [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.city ?? person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.highlights?.display && (
            <Row fillWidth gap="12" wrap marginBottom="xl" s={{ horizontal: "center" }}>
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
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.participations?.display && (
            <>
              <Heading
                as="h2"
                id={about.participations.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.participations.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="40">
                {about.participations.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4" gap="12" wrap>
                      <Text id={item.name} variant="heading-strong-l">
                        {item.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {item.timeframe}
                      </Text>
                    </Row>
                    <Row gap="8" vertical="center" marginBottom="m" wrap>
                      <Text variant="body-default-s" onBackground="brand-weak">
                        {item.role}
                      </Text>
                      {item.status && <Tag size="s">{item.status}</Tag>}
                    </Row>
                    <Column as="ul" gap="12">
                      {item.points.map((point, pointIndex) => (
                        <Text as="li" variant="body-default-m" key={`${item.name}-p-${pointIndex}`}>
                          {point}
                        </Text>
                      ))}
                    </Column>
                    {item.images && item.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {item.images.map((image, imageIndex) => (
                          <Row
                            key={imageIndex}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                    {item.link && (
                      <Row paddingTop="m">
                        <Button
                          href={item.link.href}
                          label={item.link.label}
                          suffixIcon={item.internal ? "arrowRight" : "arrowUpRightFromSquare"}
                          size="s"
                          variant="secondary"
                        />
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certificates?.display && (
            <>
              <Heading
                as="h2"
                id={about.certificates.title}
                variant="display-strong-s"
                marginTop="48"
                marginBottom="m"
              >
                {about.certificates.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.certificates.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth gap="4">
                    <Row fillWidth horizontal="between" vertical="end" gap="12" wrap>
                      <Text id={item.name} variant="heading-strong-l">
                        {item.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {item.date}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {item.issuer}
                    </Text>
                    {item.description && (
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {item.description}
                      </Text>
                    )}
                    {item.link && (
                      <Row paddingTop="8">
                        <Button
                          href={item.link.href}
                          label={item.link.label}
                          suffixIcon="arrowUpRightFromSquare"
                          size="s"
                          variant="secondary"
                        />
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.lessons?.display && (
            <>
              <Heading
                as="h2"
                id={about.lessons.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.lessons.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.lessons.items.map((item, index) => (
                  <Column
                    key={`${item.title}-${index}`}
                    fillWidth
                    gap="8"
                    padding="20"
                    radius="l"
                    border="neutral-alpha-medium"
                    background="neutral-alpha-weak"
                  >
                    <Text id={item.title} variant="heading-strong-m">
                      {item.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                    <Text variant="label-default-s" onBackground="brand-weak">
                      {item.source}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}