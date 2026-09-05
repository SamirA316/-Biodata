import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { fetchProfile } from './features/profileSlice';
import { 
  User, Cake, MapPin, Ruler, IdCard, 
  GraduationCap, Users, Mail, Home, Map, 
  Phone, Heart, Loader, MessageCircle
} from 'lucide-react';
import './index.css';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: profile, loading, error } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Loader className="animate-spin text-[var(--color-brand-maroon)]" size={48} />
        <p className="text-[var(--color-brand-maroon)] font-['Playfair_Display'] tracking-widest text-lg">Loading Profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-700">
        <div className="bg-white p-8 rounded-md shadow-lg text-center border-2 border-red-200">
          <p className="text-2xl font-['Playfair_Display'] mb-2">Oops!</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="py-12 px-4 min-h-screen flex justify-center items-start">
      
      {/* Main Biodata Paper */}
      <div className="w-full max-w-[850px] bg-[var(--color-paper-bg)] shadow-2xl relative">
        
        {/* Inner Ornamental Border */}
        <div className="absolute inset-2 border-[1.5px] border-[var(--color-brand-gold)] pointer-events-none opacity-60"></div>
        <div className="absolute inset-3 border border-[var(--color-brand-maroon)] pointer-events-none opacity-20"></div>

        <div className="p-10 md:p-16 relative z-10">
          
          {/* Header */}
          <header className="text-center mb-12">
            <h4 className="font-['Playfair_Display'] text-[var(--color-brand-gold)] tracking-[0.3em] uppercase text-sm mb-6">Marriage Biodata</h4>
            
            <div className="w-24 h-24 mx-auto mb-6 bg-white border border-[var(--color-brand-gold)] rounded-full flex items-center justify-center shadow-md text-[var(--color-brand-maroon)]">
              <User size={48} strokeWidth={1} />
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[var(--color-brand-maroon)] mb-4">
              {profile.name}
            </h1>
            <p className="text-[var(--color-text-main)] font-medium text-lg uppercase tracking-widest">
              {profile.subtitle}
            </p>

            <div className="ornament-divider mt-8">
              <div className="ornament-diamond"></div>
            </div>

            <div className="flex justify-center gap-6 md:gap-12 flex-wrap mt-8">
              <div className="flex flex-col items-center gap-2">
                <Cake size={20} className="text-[var(--color-brand-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-text-main)]">{profile.birthDate}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin size={20} className="text-[var(--color-brand-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-text-main)]">{profile.location}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Ruler size={20} className="text-[var(--color-brand-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-text-main)]">{profile.height}</span>
              </div>
            </div>
          </header>

          <main className="space-y-12">
            
            {/* Personal Details */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl text-[var(--color-brand-maroon)] mb-6 flex items-center gap-3">
                <IdCard size={20} className="text-[var(--color-brand-gold)]" /> Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                {[
                  { label: 'Religion', value: profile.personalDetails.religion },
                  { label: 'Caste', value: profile.personalDetails.caste },
                  { label: 'Date of Birth', value: profile.personalDetails.dateOfBirth },
                  { label: 'Height', value: profile.personalDetails.height }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-semibold text-[var(--color-brand-maroon)]">{item.label}</span>
                    <span className="text-[var(--color-text-main)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Profession */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl text-[var(--color-brand-maroon)] mb-6 flex items-center gap-3">
                <GraduationCap size={20} className="text-[var(--color-brand-gold)]" /> Education & Profession
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                {[
                  { label: 'Education', value: profile.educationProfession.education },
                  { label: 'Occupation', value: profile.educationProfession.occupation },
                  { label: 'Company', value: profile.educationProfession.company }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                    <span className="font-semibold text-[var(--color-brand-maroon)]">{item.label}</span>
                    <span className="text-[var(--color-text-main)] text-right max-w-[65%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Family Background */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl text-[var(--color-brand-maroon)] mb-6 flex items-center gap-3">
                <Users size={20} className="text-[var(--color-brand-gold)]" /> Family Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                {[
                  { label: "Father's Name", value: profile.familyBackground.fathersName },
                  { label: "Father's Occ.", value: profile.familyBackground.fathersOccupation },
                  { label: "Mother's Name", value: profile.familyBackground.mothersName },
                  { label: "Mother's Occ.", value: profile.familyBackground.mothersOccupation },
                  { label: "Siblings", value: profile.familyBackground.siblings },
                  ...(profile.familyBackground.unclesName ? [
                    { label: "Uncle's Name", value: profile.familyBackground.unclesName },
                    { label: "Uncle's Occ.", value: profile.familyBackground.unclesOccupation },
                    { label: "Aunty's Name", value: profile.familyBackground.auntysName },
                    { label: "Aunty's Occ.", value: profile.familyBackground.auntysOccupation },
                    { label: "Uncle's Children", value: profile.familyBackground.unclesChildren }
                  ] : []),
                  { label: "Family Type", value: profile.familyBackground.familyType },
                  { label: "Family Status", value: profile.familyBackground.familyStatus },
                  { label: "Native Place", value: profile.familyBackground.nativePlace }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-black/5 pb-2">
                    <span className="font-semibold text-[var(--color-brand-maroon)] whitespace-nowrap mr-4">{item.label}</span>
                    <span className="text-[var(--color-text-main)] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="ornament-divider">
              <div className="ornament-diamond"></div>
            </div>

            {/* Contact Details */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl text-[var(--color-brand-maroon)] mb-6 text-center">
                Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px]">
                
                {/* Addresses */}
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Home size={20} className="text-[var(--color-brand-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--color-brand-maroon)] mb-1">Current Address</h3>
                      <p className="text-[var(--color-text-main)] leading-relaxed">{profile.contactDetails.currentAddress}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Map size={20} className="text-[var(--color-brand-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--color-brand-maroon)] mb-1">Permanent Address</h3>
                      <p className="text-[var(--color-text-main)] leading-relaxed">{profile.contactDetails.permanentAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Phones and Email */}
                <div className="space-y-6">
                  {profile.contactDetails.mobileNumbers && profile.contactDetails.mobileNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.raw}`} className="flex gap-4 items-center group">
                      <div className="w-10 h-10 rounded-full border border-[var(--color-brand-gold)] flex items-center justify-center text-[var(--color-brand-maroon)] group-hover:bg-[var(--color-brand-maroon)] group-hover:text-white transition-colors">
                        <Phone size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Call {phone.relation}</h3>
                        <p className="text-[var(--color-brand-maroon)] font-bold text-lg">{phone.number}</p>
                      </div>
                    </a>
                  ))}

                  <a href={`mailto:${profile.contactDetails.emailId}`} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-full border border-[var(--color-brand-gold)] flex items-center justify-center text-[var(--color-brand-maroon)] group-hover:bg-[var(--color-brand-maroon)] group-hover:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Email ID</h3>
                      <p className="text-[var(--color-brand-maroon)] font-bold">{profile.contactDetails.emailId}</p>
                    </div>
                  </a>
                </div>

              </div>
            </section>
          </main>
          
          <footer className="text-center mt-16 pt-8 border-t border-black/5 text-[var(--color-text-muted)] text-sm">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart size={14} className="text-[var(--color-brand-maroon)] fill-[var(--color-brand-maroon)]" />
            </p>
          </footer>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {profile.contactDetails.whatsappNumber && (
        <a 
          href={`https://wa.me/${profile.contactDetails.whatsappNumber}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105 hover:bg-[#1DA851] font-bold tracking-wide"
        >
          <MessageCircle size={24} fill="currentColor" />
          <span className="hidden sm:inline">WhatsApp Me</span>
        </a>
      )}
    </div>
  );
}

export default App;
