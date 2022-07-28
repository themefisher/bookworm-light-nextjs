import social from "@config/social.json";
import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";

const Social = ({ className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = social;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a href={facebook} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a href={twitter} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoTwitter />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a href={youtube} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoYoutube />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a href={linkedin} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoLinkedin />
          </a>
        </li>
      )}
      {github && (
        <li className="inline-block">
          <a href={github} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoGithub />
          </a>
        </li>
      )}
      {gitlab && (
        <li className="inline-block">
          <a href={gitlab} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoGitlab />
          </a>
        </li>
      )}
      {medium && (
        <li className="inline-block">
          <a href={medium} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoMedium />
          </a>
        </li>
      )}
      {codepen && (
        <li className="inline-block">
          <a href={codepen} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoCodepen />
          </a>
        </li>
      )}
      {bitbucket && (
        <li className="inline-block">
          <a
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBitbucket />
          </a>
        </li>
      )}
      {dribbble && (
        <li className="inline-block">
          <a href={dribbble} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoDribbble />
          </a>
        </li>
      )}
      {behance && (
        <li className="inline-block">
          <a href={behance} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoBehance />
          </a>
        </li>
      )}
      {pinterest && (
        <li className="inline-block">
          <a
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoPinterest />
          </a>
        </li>
      )}
      {soundcloud && (
        <li className="inline-block">
          <a
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSoundcloud />
          </a>
        </li>
      )}
      {tumblr && (
        <li className="inline-block">
          <a href={tumblr} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoTumblr />
          </a>
        </li>
      )}
      {reddit && (
        <li className="inline-block">
          <a href={reddit} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoReddit />
          </a>
        </li>
      )}
      {vk && (
        <li className="inline-block">
          <a href={vk} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoVk />
          </a>
        </li>
      )}
      {whatsapp && (
        <li className="inline-block">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoWhatsapp />
          </a>
        </li>
      )}
      {snapchat && (
        <li className="inline-block">
          <a href={snapchat} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoSnapchat />
          </a>
        </li>
      )}
      {vimeo && (
        <li className="inline-block">
          <a href={vimeo} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoVimeo />
          </a>
        </li>
      )}
      {tiktok && (
        <li className="inline-block">
          <a href={tiktok} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoTiktok />
          </a>
        </li>
      )}
      {foursquare && (
        <li className="inline-block">
          <a
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFoursquare />
          </a>
        </li>
      )}
      {skype && (
        <li className="inline-block">
          <a href={skype} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoSkype />
          </a>
        </li>
      )}
      {website && (
        <li className="inline-block">
          <a href={website} target="_blank" rel="noopener noreferrer nofollow">
            <IoGlobeOutline />
          </a>
        </li>
      )}
      {rss && (
        <li className="inline-block">
          <a href={rss} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoRss />
          </a>
        </li>
      )}
      {email && (
        <li className="inline-block">
          <a href={`mailto:${email}`}>
            <IoMail />
          </a>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <a href={`tel:${phone}`}>
            <IoCall />
          </a>
        </li>
      )}
      {address && (
        <li className="inline-block">
          <a href={address} target="_blank" rel="noopener noreferrer nofollow">
            <IoLocation />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
