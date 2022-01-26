import { HeaderSection } from "@components";
import Image from "next/image";
import our_team from "@containers/about-us/images/our-team.png";
import avatar from "../../avatar.png";
export const InterestedSection = () => {
    return (
        <section>
            <div className="flex flex-col space-y-16">
                <HeaderSection
                    title="No suitable position but interested?"
                    description="You can contact or send your CV directly to us, we don't care where you come from but how determined you will be"
                />

                <div className="relative">
                    <div className="md:block hidden">
                    <Image
                        className="w-full"
                        src={our_team}
                        objectFit="contain"
                        alt="Our Team"
                    />
                    </div>

                    <div className="container">
                        <div data-aos="fade-up" className="relative md:absolute top-0 flex items-center justify-center h-full">
                            <div className="p-4 flex flex-col max-w-md md:max-w-xl space-y-4 rounded-md bg-primary-700 opacity-90 text-white">
                                <div className="w-14 h-14 md:w-32 md:h-32">
                                    <Image
                                        className="rounded-full"
                                        src={avatar}
                                        alt=""
                                        objectFit="contain"
                                    />
                                </div>

                                <span>
                                    ‘’In TungTung, we always create the best conditions for
                                    everyone to develop their capacity no matter where you come
                                    from’’.
                                </span>

                                <h2 className="text-base font-medium">Phan Thanh Tung</h2>
                                <span>CEO TungTung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
