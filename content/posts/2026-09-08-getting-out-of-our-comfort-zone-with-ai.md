---
title: Getting out of our comfort zone with AI
date: "2026-09-08"
summary: Using AI to educate myself before implementing, so I can take ownership of unfamiliar work with confidence.
tags: [journal, ai]
draft: false
---

As we live in a world where AI can spit out good code on demand, doors are opened to us to work outside of our typical domains. A frontend developer can now prompt AI to deliver backend features, and vice versa. We can almost feign expertise in areas we're not comfortable.

This fact doesn't negate, but multiplies our responsibility in making sure what we are outputting is thoroughly considered. I have found it important to lay the mental foundations before blindly taking on work I'm not familiar with. In fact, our new efficiency allows and should encourage us to dedicate more time to educating ourselves on what we are working on.

A recent example of this in my work saw me tackling the job of upgrading a carousel library's version to eliminate a security vulnerability. Due to a slight lack of familiarity with security best practices, a lot of the language used in the ticket (which itself was AI-generated) wasn't too clear to me. It would have been easy to feed the ticket to AI and have it grind on a solution - probably a quick roundtrip - simple plan, implementation, push and forget. But I think it's important there's a little more thought goes into our work than that. Especially when we have tools that make that process easier.

## AI for education

My first step is to feed the ticket into AI and ask a good model to break it down in layman's terms. I give it context of my engineering background and where I feel my weaknesses in understanding are. I often say _'please break it down simply'_. I have found that in my experience with AI assisted learning, humility is everything - as in 'real life', leaving our ego at the door is beneficial. The AI is kind and doesn't belittle us - it simply teaches us in the manner we ask it to.

I typically have AI generate a markdown document with its output, so it's easy to read. Then I'll do what any good student should - ask questions. This might look something like this: _'You mentioned prototype pollution. Can you explain that concept in more detail? Please generate another markdown document'_. Before too long, I've built a clearer picture of what I'm working on.

## Closing the loop

The secondary benefit of this process becomes clear when it comes to implementation. Not only do we now have a more solid understanding of the work expected, the AI does too. My next prompt might look something like this: _'Given the ticket and the extra context we've amassed around the contents, please generate a plan of how we're going to implement this fix. Where appropriate, please reference the prior documents for my understanding.'_

Prompting with context like this helps ground the plan in understanding and language I'm now comfortable with, which gives me higher confidence in the output. As I implement each step the plan generates, I can now contextualize what the code changes are achieving and I might even be better positioned to jump in and correct something that feels off.

## Reflections on this process

I think this sort of educational process is vital in allowing us to take ownership of new areas of understanding with confidence - particularly as we're expected to be able to work more broadly because of AI's capabilities. It's allowed me to worry less and deliver more, and feels like I'm growing, not handing over control of everything to the robots and their all consuming power.

I sometimes feel a sort of loss of dignity in dumping a task on AI and practically saying _'I know nothing about this, and I don't want to know, please just do work and do it well'_. It feels somewhat cathartic to step away from deferring the responsibility of understanding to some random robot dude.

Some days I miss Stack Overflow, some days I miss _learning_ instead of just prompting, and this way of working helps scratch that itch for me.
