import { TimelineEra, TimelineEvent } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EraTimelineProps {
  eras: TimelineEra[];
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

export default function EraTimeline({ eras, events }: EraTimelineProps) {
  // 各時代にイベントをグループ化
  const eventsByEra = events.reduce((acc, event) => {
    if (event.era) {
      if (!acc[event.era]) {
        acc[event.era] = [];
      }
      acc[event.era].push(event);
    }
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  // 各時代のイベントを日付順でソート
  Object.keys(eventsByEra).forEach(eraId => {
    eventsByEra[eraId].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const hasDay = dateStr.includes('-') && dateStr.split('-').length === 3;
    
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
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">経歴</h2>
      <div className="space-y-6">
        {eras.map((era) => {
          const eraEvents = eventsByEra[era.id] || [];
          
          return (
            <div key={era.id} className="relative">
              {/* Era Header */}
              <Card className="bg-gray-800/50 border-gray-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">
                        {era.name}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{formatDate(era.startDate)}</span>
                        {era.endDate && <span>〜 {formatDate(era.endDate)}</span>}
                        {!era.endDate && <span>〜 現在</span>}
                      </div>
                      {era.description && (
                        <p className="text-gray-300 text-sm mt-2">
                          {era.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-gray-700 text-gray-300 border-gray-600">
                        {eraEvents.length}件
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Era Events */}
              {eraEvents.length > 0 && (
                <div className="mt-4 ml-8 space-y-4 relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-gray-800"></div>
                  {eraEvents.map((event, index) => (
                    <div key={index} className="relative flex items-start space-x-4">
                      {/* Event dot */}
                      <div className="relative z-10 flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-lg">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      </div>
                      
                      {/* Event content */}
                      <div className="flex-1 min-w-0">
                        <Card className="hover:shadow-lg transition-shadow duration-200 bg-gray-900/30 border-gray-700 hover:bg-gray-900/50">
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
                                  {formatDate(event.date)}
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
