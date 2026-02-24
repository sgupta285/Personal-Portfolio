export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  resumes: {
    cs: string;
  };
}

export const contactInfo: ContactInfo = {
  email: 'srijangupta2013@gmail.com',
  phone: '+1 (608) 598-7333',
  linkedin: 'https://www.linkedin.com/in/srijan-gupta-1b6456215/',
  resumes: {
    cs: 'figma:asset/85ad12416bd0122b9c68387058690ada88614a93.png'
  }
};