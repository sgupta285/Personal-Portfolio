import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Fallback to mailto
      const mailtoLink = `mailto:(placeholder)?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;
      
      toast.success('Opening email client...', {
        description: 'Your default email app will open with your message.'
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" style={{ color: 'var(--ink-primary)' }}>
          Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="mt-1.5"
          style={{
            borderRadius: 'var(--r-md)',
            borderColor: errors.name ? 'var(--danger)' : 'var(--muted)'
          }}
        />
        {errors.name && (
          <p
            className="mt-1.5"
            style={{
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--text-small-lh)',
              color: 'var(--danger)'
            }}
          >
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" style={{ color: 'var(--ink-primary)' }}>
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="mt-1.5"
          style={{
            borderRadius: 'var(--r-md)',
            borderColor: errors.email ? 'var(--danger)' : 'var(--muted)'
          }}
        />
        {errors.email && (
          <p
            className="mt-1.5"
            style={{
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--text-small-lh)',
              color: 'var(--danger)'
            }}
          >
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" style={{ color: 'var(--ink-primary)' }}>
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={6}
          className="mt-1.5"
          style={{
            borderRadius: 'var(--r-md)',
            borderColor: errors.message ? 'var(--danger)' : 'var(--muted)'
          }}
        />
        {errors.message && (
          <p
            className="mt-1.5"
            style={{
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--text-small-lh)',
              color: 'var(--danger)'
            }}
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg transition-colors hover:bg-[var(--accent)]/90"
        style={{
          backgroundColor: 'var(--accent)',
          color: 'white',
          borderRadius: 'var(--r-md)'
        }}
      >
        Send Message
      </button>
    </form>
  );
}