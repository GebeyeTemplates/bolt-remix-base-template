import React from "react";
import type { MetaFunction } from "@remix-run/node";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { Theme, Button, Heading, Text, Flex, Container } from "@radix-ui/themes";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [switchOn, setSwitchOn] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Theme appearance="light" accentColor="indigo">
        <Container size="3" className="py-20">
          <Flex direction="column" align="center" gap="4">
            <Heading as="h1" size="9" className="text-center">
              Build Modern Web Apps Faster
            </Heading>
            <Text as="p" size="5" color="gray" className="max-w-2xl text-center">
              Kickstart your next project with Remix, Tailwind CSS, and Radix UI. This starter template gives you accessibility, speed, and beautiful design out of the box.
            </Text>
            <Flex gap="3" mt="4">
              <Button size="4" radius="full" color="indigo">
                Get Started
              </Button>
              <Button size="4" radius="full" variant="soft" color="gray">
                Learn More
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Theme>
      {/* Existing Content */}
      
    </div>
  );
}

