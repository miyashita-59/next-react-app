'use client'

import { useRouter } from "next/navigation"

export default function Nav() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/')}>Top</button>
      <button onClick={() => router.push('/about')}>About</button>
      <button onClick={() => router.push('/mypage')}>MyPage</button>
      <button onClick={() => router.push('/blog')}>Blog</button>
    </div>
  )
}