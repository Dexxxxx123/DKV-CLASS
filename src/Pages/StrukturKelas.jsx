import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			{/* wali kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="WALI KELAS" Nama="Feti Rohdiyati S.spd" Width="150px" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* wakil dan ketua */}
				<div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.2rem]">
						<BorderStruktur Jabatan="KETUA KELAS" Nama="M. Aditya Rifaldin" Width="120px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.2rem]">
						<BorderStruktur Jabatan="WAKIL KETUA KELAS" Nama="M. Dewa Balian Ash" Width="120px" />
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
				</div>

				{/* Seketaris dan bendahara */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[20rem]"
					data-aos="fade-up"
					data-aos-duration="1200">

					<div className="flex-col">
						<BorderStruktur Jabatan="SEKERTARIS" Nama=" M. Ridwan" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="BENDAHARA 1" Nama="Puput Aulia Wardani" Width="130px" />
					</div>
					<div className="flex-col">
						<BorderStruktur Jabatan="BENDAHARA 2" Nama="Putri Julia Ningsih" Width="130px" />
					</div>
				</div>

				<div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>

				{/* Keamanan dan Kebersihan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.44rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.3rem] lg:gap-[23.1rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.5rem] lg:gap-[40.5rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="MEMBER" Nama="Afdan" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Alif Alfarizi" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Afgan Sahreza" Width="120px" />
					</div>

					<div className="flex-col lg:hidden lg: flex">
						<BorderStruktur Jabatan="MEMBER" Nama="Afrian Armadi" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Alvin Riziq Putra" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Daris Wansak" Width="120px" />
					</div>

					<div className="flex-col hidden lg:flex">
						<BorderStruktur Jabatan="MEMBER" Nama="Fahril Pratama" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Fiha Ainun H." Width="120px" />
						<BorderStruktur Jabatan="" Nama="Faujan Aqso" Width="120px" />
						<div className="py-[0%]"></div>
					</div>
				</div>



			{/* peralatan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[29.7rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="MEMBER" Nama="Hasby Ash Shidiqin" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Humayrah" Width="120px" />
						<BorderStruktur Jabatan="" Nama="M. Haikal Pratama" Width="120px" />
						<BorderStruktur Jabatan="" Nama="M. Yusuf Al Risķi" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Muh. Ainun Rahma" Width="120px" />
						<BorderStruktur Jabatan="" Nama="M. Hijrl" Width="120px" />
				
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="MEMBER" Nama="M. Putra Ramadhan." Width="120px" />
						<BorderStruktur Jabatan="" Nama="M. Maulana Ishak" Width="120px" />
						<BorderStruktur Jabatan="" Nama="Melina Putri" Width="120px" />
					</div>
				</div>

				{/* Kesehatan */}
				{	<div
					className=" absolute bottom-[12.5%] "
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
					  	  <BorderStruktur Jabatan="MEMBER" Nama="Rafkah Aditya" Width="120px" />
						  <BorderStruktur Jabatan="" Nama="Rifan Junaidin" Width="120px" />
						  <BorderStruktur Jabatan="" Nama="Supriadin Putra" Width="120px" />
						  <BorderStruktur Jabatan="" Nama="Zihan Fahira" Width="120px" />
						
						</div>
					</div>
				</div> }
			</div>
		</div>
	)
}

export default StrukturKelas
