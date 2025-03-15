"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { useState, useRef, useEffect } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    // Auto-adjust the height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Initialize textarea height once mounted
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleSendClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=rajasimhabolla@gmail.com&body=${encodedMessage}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <Flex fillWidth maxWidth={24} gap="8" direction="column">
        <div style={{ position: 'relative', width: '100%' }}>
          <label 
            htmlFor="message-input"
            style={{
              position: 'absolute',
              top: message ? '-12px' : '12px',
              left: '12px',
              fontSize: message ? '12px' : '16px',
              color: 'var(--color-text-neutral-low)',
              transition: 'all 0.2s',
              pointerEvents: 'none',
              backgroundColor: message ? 'var(--color-background-surface)' : 'transparent',
              padding: message ? '0 4px' : '0',
              zIndex: 1,
            }}
          >
            Your message or request
          </label>
          <textarea
            ref={textareaRef}
            id="message-input"
            value={message}
            onChange={handleMessageChange}
            style={{
              width: '100%',
              minHeight: '48px',
              padding: '12px',
              fontSize: '16px',
              lineHeight: '1.5',
              border: '1px solid var(--color-border-neutral-medium)',
              borderRadius: '8px',
              backgroundColor: 'var(--color-background-input, rgba(0, 0, 0, 0.7))',
              color: 'var(--color-text-neutral-strong)',
              resize: 'none',
              overflow: 'hidden',
              fontFamily: 'inherit',
              outline: 'none',
              boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
              transition: 'background-color 0.2s, border-color 0.2s',
            }}
            placeholder=""
            rows={1}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-border-neutral-strong, rgba(255, 255, 255, 0.3))';
              e.target.style.backgroundColor = 'var(--color-background-input-focus, rgba(0, 0, 0, 0.2))';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border-neutral-medium, rgba(255, 255, 255, 0.1))';
              e.target.style.backgroundColor = 'var(--color-background-input, rgba(0, 0, 0, 0.1))';
            }}
          />
        </div>
        
        <Flex height="48" vertical="center">
          <Button 
            size="m" 
            fillWidth 
            onClick={handleSendClick}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </Column>
  );
};
