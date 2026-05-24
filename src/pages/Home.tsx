import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  SiInstagram,
  SiYoutube,
  SiX,
  SiTiktok,
} from "react-icons/si";
import { 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Target, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  ShieldCheck,
  Clock
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KWLink = ({ keyword, url }: { keyword: string, url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
    {keyword}
  </a>
);

const IGLink = () => <KWLink keyword="instagram comment generator" url="https://commenttools.com/tools/instagram-comment-generator" />;
const YTLink = () => <KWLink keyword="youtube comment generator" url="https://commenttools.com/tools/youtube-comment-generator" />;
const TWLink = () => <KWLink keyword="twitter comment generator" url="https://commenttools.com/tools/twitter-comment-generator" />;
const TKLink = () => <KWLink keyword="tiktok comment generator" url="https://commenttools.com/tools/tiktok-comment-generator" />;
const TKCommentLink = () => <KWLink keyword="tiktok comment" url="https://commenttools.com/tools/tiktok-comment-generator" />;
const FakeTKLink = () => <KWLink keyword="fake tiktok comment" url="https://commenttools.com/tools/tiktok-comment-generator" />;
const FakeTKCommentsLink = () => <KWLink keyword="fake tiktok comments" url="https://commenttools.com/tools/tiktok-comment-generator" />;
const TKCommentsLink = () => <KWLink keyword="tiktok comments" url="https://commenttools.com/tools/tiktok-comment-generator" />;

const StartBuildingURL = "https://commenttools.com/";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">CommentTools</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#tools" className="text-sm font-medium text-muted-foreground hover:text-foreground">Tools</a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
            <a href="#guide" className="text-sm font-medium text-muted-foreground hover:text-foreground">Guides</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</a>
          </nav>
          <Button asChild>
            <a href={StartBuildingURL} target="_blank" rel="noopener noreferrer">Start Building</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div {...fadeIn}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                AI-Powered Comments That <span className="text-primary">Drive Engagement</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                The ultimate suite of intelligent comment generation tools for social media marketers, influencers, and brands. Generate platform-native, authentic-sounding responses in seconds. Build community, drive algorithms, and save countless hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                  <a href={StartBuildingURL} target="_blank" rel="noopener noreferrer">Start Building <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                  <a href="#tools">Explore Tools</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="tools" className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete Engagement Arsenal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to dominate every major social platform with tailored, high-converting comments. Stop wasting time and start automating your community growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SiInstagram className="h-10 w-10 text-pink-600 mb-4" />
                <CardTitle>Instagram</CardTitle>
                <CardDescription>Perfect for lifestyle, brand, and creator accounts.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Boost your engagement rate with tailored replies using our <IGLink />. It reads the image context and writes the perfect reply.</p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://commenttools.com/tools/instagram-comment-generator" target="_blank" rel="noopener noreferrer">Use Tool</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SiYoutube className="h-10 w-10 text-red-600 mb-4" />
                <CardTitle>YouTube</CardTitle>
                <CardDescription>Drive algorithm performance and subscriber loyalty.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Keep the conversation going in your video discussions with a <YTLink />. Build authority in the comment section.</p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://commenttools.com/tools/youtube-comment-generator" target="_blank" rel="noopener noreferrer">Use Tool</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SiX className="h-10 w-10 text-foreground mb-4" />
                <CardTitle>Twitter / X</CardTitle>
                <CardDescription>Master the art of the witty, concise reply.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Join viral threads instantly with a highly optimized <TWLink />. Stand out with sharp, engaging replies.</p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://commenttools.com/tools/twitter-comment-generator" target="_blank" rel="noopener noreferrer">Use Tool</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SiTiktok className="h-10 w-10 text-foreground mb-4" />
                <CardTitle>TikTok</CardTitle>
                <CardDescription>Match Gen Z energy and fast-paced trends.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">Generate the perfect <TKCommentLink /> instantly using our <TKLink />. Ride the algorithm to the FYP.</p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://commenttools.com/tools/tiktok-comment-generator" target="_blank" rel="noopener noreferrer">Use Tool</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="guide" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert lg:prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8">What is an Instagram Comment Generator?</h2>
            <p>
              When you use an <IGLink />, you are leveraging advanced AI to formulate the perfect response to posts on one of the world's most visual platforms. An <IGLink /> analyzes the context of an image, the caption, and the overall vibe of the profile to spit out a comment that feels human, engaging, and culturally relevant. It's the ultimate weapon for modern social media managers.
            </p>
            <p>
              Brands and influencers spend countless hours managing their community. The demand to be responsive is higher than ever, and a simple generic phrase or a single emoji no longer cuts it. The algorithm rewards meaningful interactions. By utilizing an <IGLink />, social media managers can save hours of manual typing while actually increasing the quality of their community engagement. Whether you are running a boutique coffee shop account or managing a massive global brand, the <IGLink /> adapts to your tone of voice—be it professional, playful, or deeply technical.
            </p>
            <p>
              Furthermore, using an <IGLink /> helps you break through writer's block. We've all stared at a beautiful photo and had no idea what to say. The <IGLink /> provides instant inspiration, offering multiple variations that you can tweak or post directly. It's the ultimate productivity hack for Instagram growth, helping you scale your interactions without sacrificing quality. The more you use an <IGLink />, the more you train yourself to recognize what types of comments perform best.
            </p>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">What is a YouTube Comment Generator?</h2>
            <p>
              A <YTLink /> is a specialized tool designed to help creators and viewers craft engaging, thoughtful, and algorithm-friendly comments for long-form video content. YouTube comments are notoriously difficult to manage at scale. They often require deeper context, referencing specific timestamps, or answering complex questions. This is where a <YTLink /> shines brilliantly.
            </p>
            <p>
              For content creators, replying to the first wave of comments after publishing a video is crucial for pushing the video into recommended feeds. A <YTLink /> allows you to process hundreds of comments swiftly. By generating thoughtful replies, you signal to the YouTube algorithm that your community is active. A <YTLink /> can understand the sentiment of the viewer's comment and draft a reply that shows genuine appreciation, answers a query, or playfully banters with the audience.
            </p>
            <p>
              For viewers and marketers looking to build authority in a niche, leaving insightful comments on popular videos is a proven growth strategy. Using a <YTLink /> ensures your comments stand out from the spam. Instead of standard spam, a <YTLink /> helps you articulate a point that attracts likes and replies, driving organic traffic back to your own channel. By leveraging a <YTLink />, you ensure your voice is heard in crowded comment sections.
            </p>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">What is a Twitter Comment Generator?</h2>
            <p>
              The fast-paced nature of X (formerly Twitter) demands absolute quickness and sharp wit. A <TWLink /> is engineered to help you jump into viral threads, industry discussions, and trending topics with precision. Because Twitter limits character count, every word matters. A <TWLink /> helps you maximize impact in minimal space, ensuring your point is made clearly and effectively.
            </p>
            <p>
              Networking on Twitter is heavily reliant on replies. If you want to grow an audience, you don't just tweet into the void; you reply to larger accounts. A <TWLink /> analyzes the original tweet and generates responses that add value, humor, or contrarian viewpoints—the exact ingredients for a high-performing reply. Using a <TWLink /> means you never miss a beat when a trend takes off. You can engage with influencers instantly.
            </p>
            <p>
              Moreover, a <TWLink /> is an essential tool for social listening and brand reputation management. When users mention your product, responding quickly and appropriately is vital. The <TWLink /> can draft professional support replies or witty brand banter, depending on your brand guidelines. It is the secret weapon behind many of the most active corporate accounts online.
            </p>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">What is a TikTok Comment Generator?</h2>
            <p>
              TikTok operates on an entirely different cultural wavelength than other platforms. A <TKLink /> is built to understand trends, slang, and the unique humor that dominates the For You Page (FYP). A standard, corporate-sounding reply will flop on TikTok. You need a <TKLink /> to generate responses that feel native to the platform.
            </p>
            <p>
              Every great <TKCommentLink /> is punchy, relatable, and often deeply sarcastic or highly supportive. With a <TKLink />, you can instantly produce a <TKCommentLink /> that matches the chaotic, fast-moving energy of the app. It analyzes the video context and trend lifecycle to ensure your <TKCommentLink /> lands perfectly.
            </p>
            <p>
              Sometimes, marketers and developers need to test UI layouts or pitch concepts to clients, which requires generating a <FakeTKLink />. A <FakeTKLink /> allows you to mock up viral scenarios safely. You can generate a <FakeTKLink /> to populate a design mockup, showing a client how their sponsored post might look with high engagement. Using a <TKLink /> to create a <FakeTKLink /> is a massive time-saver for agencies building pitch decks. A <FakeTKLink /> provides realistic usernames, timestamps, and culturally accurate text without needing to scrape real data. Knowing how to generate <FakeTKCommentsLink /> is a crucial skill for modern design teams.
            </p>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">How TikTok Comments Work</h2>
            <p>
              Understanding the anatomy of a viral <TKCommentLink /> is key to mastering the platform. The TikTok algorithm treats comments as a massive indicator of content quality. When a <TKCommentLink /> gets thousands of likes, it is pinned to the top of the section, and users will often scroll through the video simply to read the comments. By utilizing a <TKLink />, you can craft that perfect, pin-worthy <TKCommentLink /> every single time.
            </p>
            <p>
              A successful <TKCommentLink /> often relies on shared experiences, pointing out a funny background detail, or using current trending audio references in text form. A <TKLink /> is trained on these exact patterns. If you are struggling to maintain your brand's voice while sounding authentic to Gen Z, a <TKLink /> bridges that gap perfectly. It allows you to participate in culture without feeling forced. By analyzing top-performing <TKCommentsLink />, the generator learns what resonates.
            </p>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">Tips for Getting More Engagement</h2>
            <p>
              Success on social media requires more than just posting great content; it requires active community management. Here are expert tips for maximizing your reach across platforms using CommentTools.
            </p>
            <h3>Instagram Strategies</h3>
            <p>
              On Instagram, speed is crucial. The algorithm rewards posts that get early engagement. Use the <IGLink /> to instantly reply to your first 50 comments. Ask follow-up questions in your generated replies. The <IGLink /> is perfect for formulating these open-ended responses that invite further conversation.
            </p>
            <h3>YouTube Growth</h3>
            <p>
              YouTube's community tab and video comment sections are goldmines for subscriber retention. Pin a high-value comment to the top of your video. Use the <YTLink /> to draft a comprehensive, thoughtful pinned comment. Then, spend 20 minutes a day using the <YTLink /> to reply to your most loyal viewers. It builds immense goodwill.
            </p>
            <h3>Twitter / X Dominance</h3>
            <p>
              Twitter thrives on conflict, humor, and insight. Don't just agree with a viral tweet; add a unique perspective. The <TWLink /> can help you formulate contrarian but respectful takes. Reply to accounts slightly larger than yours using the <TWLink /> to siphon their audience towards your profile.
            </p>
            <h3>Mastering TikTok</h3>
            <p>
              For TikTok, humor is everything. A dry, literal <TKCommentLink /> will be ignored. Use the <TKLink /> to generate highly relatable, slightly unhinged responses. If you are a brand, don't be afraid to act like a normal user. The <TKLink /> understands this dynamic. And if you are an agency pitching a campaign, always use a <FakeTKLink /> generator to build out your mockups so the client can visualize the viral potential. <FakeTKCommentsLink /> help sell the vision.
            </p>
          </div>
        </section>

        <section id="features" className="py-24 container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Use a Comment Generator?</h2>
            <p className="text-lg text-muted-foreground">The strategic advantages of automating your engagement workflow.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Massive Time Savings</h3>
                <p className="text-muted-foreground">
                  Writing unique replies to hundreds of fans takes hours. An <IGLink /> or a <YTLink /> cuts that time down to minutes, allowing you to focus on creating new content.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Platform Accuracy</h3>
                <p className="text-muted-foreground">
                  A <TWLink /> knows Twitter is for short wit. A <TKLink /> knows how to craft the perfect <TKCommentLink />. You never use the wrong tone on the wrong app.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">A/B Testing & Mockups</h3>
                <p className="text-muted-foreground">
                  Need to pitch a campaign? Generate a <FakeTKLink /> to show clients exactly what a viral response looks like. It's the ultimate prototyping tool for <FakeTKCommentsLink />.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Always Stay Inspired</h3>
                <p className="text-muted-foreground">
                  Never face writer's block again. Whether you need a <YTLink /> or an <IGLink />, AI provides endless variations to keep your community engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know about our suite of tools.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg">What is an instagram comment generator?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  An <IGLink /> is an AI tool that creates contextually relevant, engaging replies for Instagram posts. It analyzes the visual and textual data to produce authentic-sounding community interactions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg">What is a youtube comment generator?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A <YTLink /> helps creators and marketers draft long-form, thoughtful replies to video viewers. It is essential for community management and boosting algorithm performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg">What is a twitter comment generator?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A <TWLink /> crafts sharp, witty, and concise replies optimized for viral threads. It helps you jump into trending conversations with maximum impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg">What is a tiktok comment generator?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A <TKLink /> produces the perfect <TKCommentLink /> tailored to Gen Z trends and FYP culture. It ensures your brand sounds authentic on the world's fastest-moving platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg">What are fake tiktok comments?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A <FakeTKLink /> is a simulated comment used for design mockups, client pitches, or UI testing. They allow agencies to demonstrate viral engagement without scraping real user data. You can easily generate <FakeTKCommentsLink /> for your pitch decks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg">Are these tools free to use?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes, you can start using the <IGLink />, <YTLink />, <TWLink />, and <TKLink /> to generate a <TKCommentLink /> today. Check out our pricing page for advanced bulk features.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg">How do I get more comments on my posts?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  The best way is to reply fast to early engagers. Using a tool like our <IGLink /> or <YTLink /> allows you to respond rapidly, which encourages others to join the conversation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-lg">Can I generate bulk comments?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes, for large agencies managing multiple accounts, our premium tools allow you to generate bulk responses. The <TWLink /> is particularly useful for managing large support threads.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left text-lg">Will using a comment generator get me banned?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  No, because you are manually reviewing and posting the comments. An <IGLink /> simply helps you write the text faster; it does not perform automated bot actions on your account.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Supercharge Your Engagement?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Stop typing the same replies over and over. Use the best tools in the industry to grow your community faster. Start generating high-quality responses right now.
            </p>
            <Button size="lg" className="h-16 px-10 text-xl w-full sm:w-auto" asChild>
              <a href={StartBuildingURL} target="_blank" rel="noopener noreferrer">Start Building Now</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t bg-slate-50 dark:bg-slate-900/50 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CommentTools</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              The definitive suite of AI-powered social media comment generators. Elevate your engagement, save time, and grow your audience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Tools</h4>
            <ul className="space-y-3">
              <li><IGLink /></li>
              <li><YTLink /></li>
              <li><TWLink /></li>
              <li><TKLink /></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><FakeTKCommentsLink /></li>
              <li><TKCommentLink /> Guide</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} CommentTools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
