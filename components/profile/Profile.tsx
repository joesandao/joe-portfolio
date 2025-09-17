import { ProfileData } from "@/data/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface ProfileProps {
  profile: ProfileData;
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-gray-800 shadow-2xl ring-4 ring-gray-700/50">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="text-2xl bg-gray-800 text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-300">
            {profile.title}
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
          )}
          {profile.social.twitter && (
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Twitter className="w-5 h-5 text-gray-300" />
            </a>
          )}
          {profile.social.email && (
            <a
              href={`mailto:${profile.social.email}`}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          )}
        </div>
      </div>

      {/* Bio Section */}
      <Card className="bg-gray-900/50 border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-white">自己紹介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            {profile.bio}
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="bg-gray-900/50 border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-white">スキル</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
