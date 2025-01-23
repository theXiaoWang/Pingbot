"use client"

import { PropsWithChildren, useEffect } from "react"
import { Icons } from "./icons"
import {
  Cog,
  Gift,
  Headphones,
  HelpCircle,
  ImagePlus,
  Inbox,
  Menu,
  Mic,
  Phone,
  Pin,
  Plus,
  PlusCircle,
  Search,
  Smile,
  Sticker,
  UserCircle,
  Video,
} from "lucide-react"
import { DiscordIcons } from "@/components/discord-ui/icons"
import Image from "next/image"

export const MockDiscordUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-bg text-white rounded-lg overflow-hidden shadow-xl">
      {/* server list */}
      <div className="hidden sm:flex w-[72px] bg-[#1e1f22] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color flex rounded-2xl items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>

        <div className="w-8 h-[2px] bg-discord-bg rounded-full my-2" />

        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="group relative size-12 bg-discord-bg rounded-3xl flex items-center justify-center mb-3 hover:rounded-2xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
          >
            {/* Marker */}
            <div
              className="absolute -left-2 w-1 bg-white rounded-r-full transition-all duration-200 
              h-2 group-hover:h-5 -mx-1"
            />
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}

        <div className="group mt-auto relative size-12 bg-discord-bg rounded-3xl flex items-center justify-center mb-3 hover:rounded-2xl transition-all duration-200 hover:bg-[#23a55a] cursor-not-allowed">
          <Plus className="text-[#23a55a] group-hover:text-white" />
        </div>
      </div>

      {/* dm list */}
      <div className="hidden md:flex w-60 bg-[#2b2d31] flex-col">
        <div className="px-2 h-16 border-b border-[#1e1f22] flex items-center shadow-sm">
          <div className=" w-full bg-[#1e1f23] h-8 rounded px-2 flex items-center text-sm text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>

        <div className="px-2 py-1">
          <div className="group flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] cursor-not-allowed">
            <DiscordIcons.Communication className="mr-4 size-8 text-[#80848e] group-hover:text-[#dbdee1]" />
            <span className="font-medium text-sm text-[#80848e] group-hover:text-[#dbdee1]">
              Friends
            </span>
          </div>

          <div className="group flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] cursor-not-allowed">
            <DiscordIcons.Nitro className="mr-4 size-8 text-[#80848e] group-hover:text-[#dbdee1]" />
            <span className="font-medium text-sm text-[#80848e] group-hover:text-[#dbdee1]">
              Nitro
            </span>
          </div>

          <div className="group flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] cursor-not-allowed">
            <DiscordIcons.CommunicationRequests className="mr-4 size-8 text-[#80848e] group-hover:text-[#dbdee1]" />
            <span className="font-medium text-sm text-[#80848e] group-hover:text-[#dbdee1]">
              Message Requests
            </span>
          </div>

          <div className="group flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] cursor-not-allowed">
            <DiscordIcons.Shop className="mr-4 size-8 text-[#80848e] group-hover:text-[#dbdee1]" />
            <span className="font-medium text-sm text-[#80848e] group-hover:text-[#dbdee1]">
              Shop
            </span>
          </div>
        </div>

        <div className="px-2 mb-4 mt-2">
          <h3 className="text-xs font-semibold text-[#80848e] px-2 mb-2 uppercase">
            Direct Messages
          </h3>

          <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer">
            <Image
              src="/brand-asset-profile-picture.png"
              alt="PingBot Avatar"
              width={32}
              height={32}
              className="object-cover rounded-full mr-3"
            />
            <span className="font-medium">PingBot</span>
          </div>

          <div className="my-1 space-y-px">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
              >
                <div className="size-8 rounded-full bg-discord-bg mr-3" />
                <span className="font-medium">User {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-2 bg-[#232428] flex items-center mt-auto">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-[10px] text-[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Mic className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer"></Mic>
            <Headphones className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer"></Headphones>
            <Cog className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer"></Cog>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex-1 flex flex-col">
        {/* dm header */}
        <div className="h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#1e1f22]">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingBot Avatar"
                width={40}
                height={40}
                className="object-cover rounded-full mr-3"
              />
              <div className="absolute bottom-0 right-3 size-3 bg-green-500 rounded-full border-2 border-[#36393f]" />
            </div>

            <p className="font-semibold text-white">PingBot</p>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            <Phone className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Video className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Pin className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <UserCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Search className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Inbox className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <HelpCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
          </div>
        </div>

        {/* message history */}
        <div className="flex-1 flex flex-col-reverse bg-discord-bg p-4 overflow-y-auto max-h-[680px]">
          {children}
        </div>

        {/* message input */}
        <div className="px-3 py-4">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <PlusCircle className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @PingBot"
              className="flex-1 bg-transparent py-2.5 px-1 text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed"
            />
            <div className="flex items-center space-x-3 mx-3 text-[#b9bbbe]">
              <Gift className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <ImagePlus className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Sticker className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Smile className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
