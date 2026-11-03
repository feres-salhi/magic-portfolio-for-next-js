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
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { getPosts } from "@/utils/utils";
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

/** Turns a section title into a clean anchor id, e.g. "Hackathons & Competitions" -> "hackathons-and-competitions" */
const toId = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const monthYear = (date: string) => {
  const d = new Date(`${date}T00:00:00`);
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
};

const firstSentence = (text: string) => {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return match ? match[0].trim() : text;
};

/** Section heading with an anchor id and space for the sticky header when jumped to */
function SectionHeading({ title, marginTop }: { title: string; marginTop?: "48" | "0" }) {
  return (
    <Heading
      as="h2"
      id={toId(title)}
      variant="display-strong-s"
      marginBottom="m"
      marginTop={marginTop ?? "0"}
      style={{ scrollMarginTop: "120px" }}
    >
      {title}
    </Heading>
  );
}

export default function About() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  // German CV order: profile, experience, projects, education, competitions, skills, certificates, languages
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] as string[] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.projects?.title ?? "",
      display: !!about.projects?.display,
      items: projects.map((p) => p.metadata.title),
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
      title: about.languagesSection?.title ?? "",
      display: !!about.languagesSection?.display,
      items: [] as string[],
    },
    {
      title: about.lessons?.title ?? "",
      display: !!about.lessons?.display,
      items: about.lessons?.items.map((item) => item.title) ?? [],
    },
  ].map((section) => ({ ...section, id: toId(section.title) }));

  const visibleSections = structure.filter((section) => section.display);

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
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
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
              <Row wrap gap="8" horizontal="center">
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
          {/* Name, role, contact and CV */}
          <Column id={toId(about.intro.title)} fillWidth vertical="center" marginBottom="24">
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
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              fitWidth
              data-border="rounded"
            >
              {about.cv?.display && (
                <Button
                  href={about.cv.href}
                  prefixIcon="document"
                  label={about.cv.label}
                  size="s"
                  weight="default"
                  variant="primary"
                />
              )}
              {social
                .filter((item) => item.essential)
                .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
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
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
            </Row>
          </Column>

          {/* Section jump bar: every section one click away */}
          <Row
            position="sticky"
            top="64"
            zIndex={2}
            fillWidth
            wrap
            gap="8"
            padding="8"
            marginBottom="32"
            radius="l"
            border="neutral-alpha-weak"
            background="page"
            s={{ position: "relative", style: { top: "auto" } }}
          >
            {visibleSections.map((section) => (
              <SmartLink key={section.id} href={`#${section.id}`}>
                <Tag size="m">{section.title}</Tag>
              </SmartLink>
            ))}
          </Row>

          {/* Profile */}
          {about.intro.display && (
            <>
              <SectionHeading title={about.intro.title} />
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="l">
                {about.intro.description}
              </Column>
            </>
          )}

          {about.facts?.display && (
            <Column
              fillWidth
              gap="12"
              padding="20"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              marginBottom="l"
            >
              {about.facts.items.map((fact) => (
                <Row key={fact.label} gap="16" s={{ direction: "column", gap: "2" }}>
                  <Text
                    variant="label-strong-s"
                    onBackground="brand-weak"
                    style={{ minWidth: "110px" }}
                  >
                    {fact.label}
                  </Text>
                  <Text variant="body-default-m">{fact.value}</Text>
                </Row>
              ))}
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

          {/* Experience */}
          {about.work.display && (
            <>
              <SectionHeading title={about.work.title} />
              <Column fillWidth gap="l" marginBottom="48">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4" gap="12" wrap>
                      <Text variant="heading-strong-l">{experience.company}</Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="12">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, achievementIndex: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${achievementIndex}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Projects: compact, scannable list with links to each case study */}
          {about.projects?.display && (
            <>
              <SectionHeading title={about.projects.title} />
              <Column fillWidth gap="12" marginBottom="48">
                {projects.map((project) => (
                  <SmartLink
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    fillWidth
                    style={{ textDecoration: "none" }}
                  >
                    <Column
                      fillWidth
                      gap="4"
                      padding="16"
                      radius="l"
                      border="neutral-alpha-weak"
                      background="neutral-alpha-weak"
                    >
                      <Row fillWidth horizontal="between" gap="12" vertical="start">
                        <Text variant="heading-strong-m" onBackground="neutral-strong">
                          {project.metadata.title}
                        </Text>
                        <Text
                          variant="label-default-s"
                          onBackground="neutral-weak"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {monthYear(project.metadata.publishedAt)}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {firstSentence(project.metadata.summary)}
                      </Text>
                      <Text variant="label-default-s" onBackground="brand-weak">
                        Read case study →
                      </Text>
                    </Column>
                  </SmartLink>
                ))}
              </Column>
            </>
          )}

          {/* Education */}
          {about.studies.display && (
            <>
              <SectionHeading title={about.studies.title} />
              <Column fillWidth gap="l" marginBottom="48">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{institution.name}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Hackathons & Competitions */}
          {about.participations?.display && (
            <>
              <SectionHeading title={about.participations.title} />
              <Column fillWidth gap="xl" marginBottom="48">
                {about.participations.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4" gap="12" wrap>
                      <Text variant="heading-strong-l">{item.name}</Text>
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

          {/* Skills */}
          {about.technical.display && (
            <>
              <SectionHeading title={about.technical.title} />
              <Column fillWidth gap="l" marginBottom="48">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
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
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Certificates */}
          {about.certificates?.display && (
            <>
              <SectionHeading title={about.certificates.title} />
              <Column fillWidth gap="l" marginBottom="48">
                {about.certificates.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth gap="4">
                    <Row fillWidth horizontal="between" vertical="end" gap="12" wrap>
                      <Text variant="heading-strong-l">{item.name}</Text>
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

          {/* Languages */}
          {about.languagesSection?.display && person.languages && (
            <>
              <SectionHeading title={about.languagesSection.title} />
              <Row fillWidth wrap gap="12" marginBottom="48">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            </>
          )}

          {/* Lessons learned */}
          {about.lessons?.display && (
            <>
              <SectionHeading title={about.lessons.title} />
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
                    <Text variant="heading-strong-m">{item.title}</Text>
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
