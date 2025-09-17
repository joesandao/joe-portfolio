import { TimelineEvent } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineProps {
  events: TimelineEvent[];
}

const getTypeColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'work':
      return 'bg-blue-900/80 text-blue-200 border-blue-700';
    case 'education':
      return 'bg-green-900/80 text-green-200 border-green-700';
    case 'project':
      return 'bg-purple-900/80 text-purple-200 border-purple-700';
    case 'achievement':
      return 'bg-yellow-900/80 text-yellow-200 border-yellow-700';
    case 'other':
      return 'bg-gray-800/80 text-gray-200 border-gray-600';
    default:
      return 'bg-gray-800/80 text-gray-200 border-gray-600';
  }
};

const getTypeLabel = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'work':
      return '職歴';
    case 'education':
      return '教育';
    case 'project':
      return 'プロジェクト';
    case 'achievement':
      return '実績';
    case 'other':
      return 'その他';
    default:
      return 'その他';
  }
};

export default function Timeline({ events }: TimelineProps) {
  // 日付順（古い順）にソート
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">経歴</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        
        {sortedEvents.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-4 mb-8">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            
            {/* Event content */}
            <div className="flex-1 min-w-0">
              <Card className="hover:shadow-xl transition-all duration-300 bg-gray-900/50 border-gray-700 hover:bg-gray-900/70">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-lg font-semibold text-white">
                      {event.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getTypeColor(event.type)} border`}>
                        {getTypeLabel(event.type)}
                      </Badge>
                      <span className="text-sm text-gray-400">
                        {(() => {
                          const date = new Date(event.date);
                          const hasDay = event.date.includes('-') && event.date.split('-').length === 3;
                          
                          if (hasDay) {
                            return date.toLocaleDateString('ja-JP', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            });
                          } else {
                            return date.toLocaleDateString('ja-JP', {
                              year: 'numeric',
                              month: 'long'
                            });
                          }
                        })()}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {event.description}
                  </p>
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
