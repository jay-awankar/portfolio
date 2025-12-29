import About from "@/components/About";
import Contact from "@/components/Contact";
import EngineeringMindset from "@/components/EngineeringMindset";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import ProofBar from "@/components/ProofBar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <About />
      <FeaturedProjects />
      <Skills />
      <EngineeringMindset />
      <Experience />
      <Contact />
    </>
  );
}

      // <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
      //   <div className="">
      //     <div
      //       data-slot="card"
      //       className="rounded-lg border flex flex-col gap-6 shadow-sm py-6 text-(--text-primary) group relative border-(--card-border) bg-(--card-background) hover:bg-(--hover-background) transition-all duration-300 overflow-hidden"
      //     >
      //       <div className="absolute -inset-px bg-linear-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      //       <a
      //         href="https://github.com/cb7chaitanya/streamly"
      //         className="relative block"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <div
      //           data-slot="card-header"
      //           className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-6"
      //         >
      //           <div className="flex items-start justify-between">
      //             <div className="space-y-3">
      //               <div
      //                 data-slot="card-title"
      //                 className="font-semibold flex items-center gap-2 text-lg group-hover:text-(--text-primary) transition-colors"
      //               >
      //                 Streamly
      //                 <svg
      //                   xmlns="http://www.w3.org/2000/svg"
      //                   width="18"
      //                   height="18"
      //                   viewBox="0 0 24 24"
      //                   fill="none"
      //                   stroke="currentColor"
      //                   strokeWidth="2"
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
      //                 >
      //                   <path d="M7 7h10v10"></path>
      //                   <path d="M7 17 17 7"></path>
      //                 </svg>
      //               </div>
      //               <div
      //                 data-slot="card-description"
      //                 className="text-muted-foreground text-sm line-clamp-2"
      //               >
      //                 Streamyard alternative with custom SFU server and FFMPEG
      //                 stream mixing
      //               </div>
      //             </div>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
      //             >
      //               Paused
      //             </span>
      //           </div>
      //         </div>
      //         <div data-slot="card-content" className="px-6">
      //           <div className="flex flex-wrap gap-3">
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               WebRTC
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Mediasoup
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               FFMPEG
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Node.js
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               React
      //             </span>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //   </div>
      //   <div className="">
      //     <div
      //       data-slot="card"
      //       className="rounded-lg border flex flex-col gap-6 shadow-sm py-6 text-(--text-primary) group relative border-(--card-border) bg-(--card-background) hover:bg-(--hover-background) transition-all duration-300 overflow-hidden"
      //     >
      //       <div className="absolute -inset-px bg-linear-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      //       <a
      //         href="https://github.com/SnipSavvy/SnipSavvy_Frontend"
      //         className="relative block"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <div
      //           data-slot="card-header"
      //           className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-6"
      //         >
      //           <div className="flex items-start justify-between">
      //             <div className="space-y-3">
      //               <div
      //                 data-slot="card-title"
      //                 className="font-semibold flex items-center gap-2 text-lg group-hover:text-(--text-primary) transition-colors"
      //               >
      //                 SnipSavvy
      //                 <svg
      //                   xmlns="http://www.w3.org/2000/svg"
      //                   width="18"
      //                   height="18"
      //                   viewBox="0 0 24 24"
      //                   fill="none"
      //                   stroke="currentColor"
      //                   strokeWidth="2"
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
      //                 >
      //                   <path d="M7 7h10v10"></path>
      //                   <path d="M7 17 17 7"></path>
      //                 </svg>
      //               </div>
      //               <div
      //                 data-slot="card-description"
      //                 className="text-muted-foreground text-sm line-clamp-2"
      //               >
      //                 Code snippet management platform with multi-level sharing
      //                 and organization capabilities
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div data-slot="card-content" className="px-6">
      //           <div className="flex flex-wrap gap-3">
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Next.js
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               TypeScript
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Tailwind
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Node.js
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               MongoDB
      //             </span>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //   </div>
      //   <div className="">
      //     <div
      //       data-slot="card"
      //       className="rounded-lg border flex flex-col gap-6 shadow-sm py-6 text-(--text-primary) group relative border-(--card-border) bg-(--card-background) hover:bg-(--hover-background) transition-all duration-300 overflow-hidden"
      //     >
      //       <div className="absolute -inset-px bg-linear-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      //       <a
      //         href="https://github.com/cb7chaitanya/StreamVault"
      //         className="relative block"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <div
      //           data-slot="card-header"
      //           className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-6"
      //         >
      //           <div className="flex items-start justify-between">
      //             <div className="space-y-3">
      //               <div
      //                 data-slot="card-title"
      //                 className="font-semibold flex items-center gap-2 text-lg group-hover:text-(--text-primary) transition-colors"
      //               >
      //                 Stream-Vault
      //                 <svg
      //                   xmlns="http://www.w3.org/2000/svg"
      //                   width="18"
      //                   height="18"
      //                   viewBox="0 0 24 24"
      //                   fill="none"
      //                   stroke="currentColor"
      //                   strokeWidth="2"
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
      //                 >
      //                   <path d="M7 7h10v10"></path>
      //                   <path d="M7 17 17 7"></path>
      //                 </svg>
      //               </div>
      //               <div
      //                 data-slot="card-description"
      //                 className="text-muted-foreground text-sm line-clamp-2"
      //               >
      //                 Decentralized video platform on WeaveVM with on-chain
      //                 storage and EVM integration
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div data-slot="card-content" className="px-6">
      //           <div className="flex flex-wrap gap-3">
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Arweave
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               EVM
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               React
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Node.js
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Solidity
      //             </span>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //   </div>
      //   <div className="">
      //     <div
      //       data-slot="card"
      //       className="rounded-lg border flex flex-col gap-6 shadow-sm py-6 text-(--text-primary) group relative border-(--card-border) bg-(--card-background) hover:bg-(--hover-background) transition-all duration-300 overflow-hidden"
      //     >
      //       <div className="absolute -inset-px bg-linear-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      //       <a
      //         href="https://github.com/cb7chaitanya/exchange"
      //         className="relative block"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <div
      //           data-slot="card-header"
      //           className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-6"
      //         >
      //           <div className="flex items-start justify-between">
      //             <div className="space-y-3">
      //               <div
      //                 data-slot="card-title"
      //                 className="font-semibold flex items-center gap-2 text-lg group-hover:text-(--text-primary) transition-colors"
      //               >
      //                 Rust CEX Backend
      //                 <svg
      //                   xmlns="http://www.w3.org/2000/svg"
      //                   width="18"
      //                   height="18"
      //                   viewBox="0 0 24 24"
      //                   fill="none"
      //                   stroke="currentColor"
      //                   strokeWidth="2"
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
      //                 >
      //                   <path d="M7 7h10v10"></path>
      //                   <path d="M7 17 17 7"></path>
      //                 </svg>
      //               </div>
      //               <div
      //                 data-slot="card-description"
      //                 className="text-muted-foreground text-sm line-clamp-2"
      //               >
      //                 High-performance crypto exchange backend with trade
      //                 matching and pub/sub system
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div data-slot="card-content" className="px-6">
      //           <div className="flex flex-wrap gap-3">
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Rust
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Actix Web
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               PostgreSQL
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               Redis
      //             </span>
      //             <span
      //               data-slot="badge"
      //               className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-(--hover-background) border-(--card-border) hover:bg-(--card-background) hover:border-(--text-muted) transition-colors"
      //             >
      //               TimescaleDB
      //             </span>
      //           </div>
      //         </div>
      //       </a>
      //     </div>
      //   </div>
      // </div>