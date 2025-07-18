<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/core';
	import { trpc } from '$lib/trpc';
	if (browser) trpc.hello.query();
</script>

<div class="px-40 flex flex-1 justify-center py-5">
	<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
		<div class="@container">
			<div class="@[480px]:p-4">
				<div
					class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
					style="background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJqrmKK_pdXFy96l3Ak2aH13htk5_EuhzDmIX1mhmVulJRvXSNVZAYh5fgmzQUEc0N5FxhhUvyQDDBzEDEwMO0BtIQ70wYdHjgUx2KDXpyfBkJDgqu0X-x_XlCfISCpEAODteXKXiKiksunTaLD0Uvb8zyzD1uX0HWGaSsNyu1Pb3fQnC1QJFfKI6At4ei7N2eQrG58fZlyy4Dq404oPfMFkl-zepono6BvPVcvs4Q4w08cNmtrR2o7-GUOTyoIk-Vk_gj5sMQz-Tz');"
				>
					<div class="flex flex-col gap-2 text-center">
						<h1
							class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
						>
							Find and book services and events
						</h1>
						<h2
							class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
						>
							Discover and book a wide range of services and events, from personal care to
							professional workshops, all in one place.
						</h2>
					</div>
					<label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
						<div class="flex w-full flex-1 items-stretch rounded-xl h-full">
							<div
								class="text-[#6a7681] flex border border-[#dde1e3] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
								data-icon="MagnifyingGlass"
								data-size="20px"
								data-weight="regular"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									fill="currentColor"
									viewBox="0 0 256 256"
								>
									<path
										d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
									></path>
								</svg>
							</div>
							<input
								placeholder="Search for services or events"
								class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde1e3] bg-white focus:border-[#dde1e3] h-full placeholder:text-[#6a7681] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
								value=""
							/>
							<div
								class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dde1e3] bg-white pr-[7px]"
							>
								<button
									class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
								>
									<span class="truncate">Search</span>
								</button>
							</div>
						</div>
					</label>
				</div>
			</div>
		</div>
		<h2
			class="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
		>
			Featured Services
		</h2>
		<div
			class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
		>
			<div class="flex items-stretch p-4 gap-3">
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDOKyTjz7_pc09n7rmWD_q2bPrBPuFubQsFMLXZ4MMQ_uN-G7QIEW2wzT0V2E22aFg3pDK7wBAOB91AQn_qnWl10LeOvHqheGakVUnaT1ffiyPlgwYu5Prd1G0gZ2YHAmJDNYAFTHCO-8DM2QnGkqztinXs7BDXHJv7DqURHjjCqeVKIg3qIqGsblh1R3gGHd8xptSvSt0P18oQVfi3U48Sgz1AclwsUHIamvit6FbSmM9Zo3FIlhNXvZiOLt2w0-0O7gmeAHB3Vj0');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">
							Haircuts &amp; Styling
						</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Book your next haircut or styling session with top stylists.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuTjyfbNBbhc55aLW9FU5GAWURQ1aaQkPTw5VLd0upyYn4PcZzg2qdoKR--u60xDVUKE-yW4rYVNAGdG2PNvcNvEgbYZAf62-n4lvde8YNqSM4rUYFvcAALcdg2dB-PRSDL8qe0cKGkmV2FFzWw2K29EbknsKf0_USarvIx-33mp9C4RZYCn_ye1cGZc5-ZdKCXTPuZIy1YcTUnF8z0mFVw4Gs20zL55WHsfg1aklK1YY5-9CDUZNJRQWIx6Px-eNhd_MplZy8vrGz');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Yoga &amp; Wellness</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Find your inner peace with our curated yoga and wellness classes.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmvlcFU1DMa5Hbtpe1shgnXtrQKLkUD2y-_StRcHgmMlNGv9YpLwJL06JdAj1kkwAWniScjtg8OT8i1dbs2trjbUxipIJd0ox5UBSGuWOhBzN7pTy5TE_5eOi2zBQu-ow_Cs3ZcyemBxcOvX5dAy_ZgIoY-Ld4M9DcMuiqsx5DySs-eR9IAUw26XBa_4BfyJ2d7VFN-P8WSm7y-T23sUuqSTxElhIid0bEVniN3fzZsOtjX0dHAAXUKJ_D0d08XBSoe-_qqRpHRMMg');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Coffee &amp; Pastries</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Enjoy a delicious coffee and pastry at our featured cafes.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1QwIdyY8Z_ejL8gUSHmxIZrsAbIFLc45Cf-RRoPG0wlpRAHWclwySQjYi0Oev8jvdtBJ-m82piuErAFUkrSORpSD5OWUdL9Df-ew0BBVglxZkpRPjJ4ZJ8AT16tyxQBSkZpQ59PfjxImZ2Jai8PRE1VAzhoqkFQCJm_SWxuXWI0GmzyqsrCRCTq2CRyB6E-KGcufOron-7OVMyijrbBbENGkwJD3D6VdpKeG_EvuNO21EKTurSuXA9STRpkKyG49Q1m0aPABL0edX');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Co-working Spaces</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Discover flexible co-working spaces for your next project.
						</p>
					</div>
				</div>
			</div>
		</div>
		<h2
			class="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
		>
			Popular Events
		</h2>
		<div
			class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
		>
			<div class="flex items-stretch p-4 gap-3">
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlJHF-IIQW1w1O-5tyrvGvdkRZLNMrVzAGTjFTyXtubKGCv-v5pFM7luifXqrlOrgpHJwKR-3B9Cf6DfCbZfJ5qUyKjc9zy_DH8Bk_K8x3LiYVtIECNk2Znzfh8HVmTOsbcfH-LLShV4WxrrKXlAgHo5zOwEZgQ2bnHAe_gWNBTO2O7B9skNkhWwjWtQfhX4N4q-pF3Ek38_LSGGqoYetfI2ZLlRW8hL9UEx3mmcppAapXPI0oN4W2_KrTMD25wfm8HSin5okShXDN');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Live Music Night</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Experience the energy of live music with our featured artists.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPC7V-xiIOfAkGsU84faqCwyohgaYyGTYBemh3V3mJcTiRTqTVXitWYz5PcymRtTEqf-ZQXjH9OYwSm1IuPtCa1EmHpWQuqUVwzwSF9AQQ402fVMcF-iq7rTO8aq6rHTHYCVjBliqqzMhxukU5Nci2mDWClaQbStunYzjK0P-Ogon3jPNGY0DHzRkPTURQ6InVnUnyfoRKqsluSjq83PdaTXfzx94InqGQn3Kqd6Gw4oRnKFeftIS9A0TrYepYkwUd457cbVj4yl31');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Art Exhibition</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Explore the latest art trends at our exclusive exhibitions.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMc2Zl6K5_fQUdtAKu3hjD7zNuwh3MoocbhQ0CCUk9_rn1fc-NfXinh3PzQUdJTZZcfbn5YvwuY4eRemSdsln_2maKT9mW2ydLMsIclDzxClLd8rVxHzGgh37MX1zdweZkh9A1N7rOeT6HT2PpONSsM-rmfWra07LVx36BNJWJcu0EJjHhK3DMnQCIQw8lO6S_BGNybc6S3d-ECpbbg17hJ70qYZKiDfdY_B2dzM5Wibi9kz3ViwLZ_avIam0u-cJE4F7JIJVl38t_');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">Tech Summit</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Connect with industry leaders at our annual tech summit.
						</p>
					</div>
				</div>
				<div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
					<div
						class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
						style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlUBLumWhH7LsJevnuBBShcLAxTzVI6lOWHM3iR7Hn0KGNHI3kBup-O8tYB7M9VNcTFmvL2dYozBiQa0w4i3Ktlyy-UhtpCodEikZQ-pwlvd6h27q_Sr8lvagNJjRsOY1bKpKNgy_OTq0sFBIqTNkxUT2TZXYNNrVKJ8E8h7sRr4kRcdpkcSeX9LI3uVs_SW0AIzPazP3Pgww_N0Wb9N1gzYBKaJ3q7PFIurafZlQlDxWrm6VTCKzKipMDemwlLhg34aR-MTrywmSK');"
					></div>
					<div>
						<p class="text-[#121416] text-base font-medium leading-normal">
							Food &amp; Wine Festival
						</p>
						<p class="text-[#6a7681] text-sm font-normal leading-normal">
							Indulge in culinary delights at our food and wine festival.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="@container">
			<div
				class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
			>
				<div class="flex flex-col gap-2 text-center">
					<h1
						class="text-[#121416] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
					>
						For Businesses
					</h1>
					<p class="text-[#121416] text-base font-normal leading-normal max-w-[720px">
						List your services and events on ServiceHub and reach a wider audience.
					</p>
				</div>
				<div class="flex flex-1 justify-center">
					<div class="flex justify-center">
						<button
							class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
						>
							<span class="truncate">Get Started</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
