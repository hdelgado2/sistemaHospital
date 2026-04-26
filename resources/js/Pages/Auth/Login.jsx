import Checkbox from '@/Components/Checkbox';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
       
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>  
            

            <Header/>
            <main className="relative min-h-screen flex items-center justify-center pt-16 pb-24">
            {/* Background Hero with data-alt */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img className="w-full h-full object-cover brightness-95" data-alt="clean modern hospital hallway with soft natural lighting cool blue tones and blurred background creating a sense of professional clinical calm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKLLFYQQRtmEj54De2rqbTCC9murv8bmKYe75KRV4m_o8VRPIIfHBMnS43IP0QgHo3GVCCIaAWf7WFyHoQ0z3j5qbP1zqMLccEBzLmsPpUVImf4RD7uEZoXPGvz0jPkqBR73zVPpwOVGhOgh3kmnx92I1P1BC7W8larhFRM_euX4e8fhnkLWKJKY2zO-wJHxW6ge_OPpeJykSyLbizn57OHsCIcfsj27rbgvhaszctYhgGNbqDt42CNn8jy_qPKd8Rzpc0rJtm0bzT" />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
            </div>
            {/* Login Container */}
            <div className="relative z-10 w-full max-w-md px-6">
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden p-8 md:p-10">
                {/* Branding Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-container rounded-full mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="lock_open">lock_open</span>
                  </div>
                  <h1 className="font-h1 text-h1 text-primary mb-2">Institucional Acceso</h1>
                  <p className="font-body-sm text-body-sm text-secondary">Personal Autorizado.</p>
                </div>
                {/* Login Form */}
                <form onSubmit={submit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="email">Correo Electronico</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" data-icon="mail">mail</span>
                      <input value={data.email} onChange={e => setData('email',e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" id="email" name="email" placeholder="name@clinical.hospital.edu" required type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Contrasena</label>
                    
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" data-icon="key">key</span>
                      <input value={data.password} onChange={e => setData('password',e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" id="password" name="password" placeholder="••••••••••••" required type="password" />
                    </div>
                  </div>
                  
                  <button type='submit' className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container active:opacity-80 transition-all shadow-sm" >
                    Acceder
                    <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                </form>
                {/* Footer Trust Signal */}
              
              </div>
              {/* Contextual Help */}
             
            </div>
          </main>
          <Footer/>

        </>
        




       
    );
}



